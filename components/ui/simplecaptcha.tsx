"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { RefreshCw } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SimpleCaptchaProps {
    onCaptchaChange: (value: string) => void;
    className?: string;
}

export function SimpleCaptcha({ onCaptchaChange, className }: SimpleCaptchaProps) {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [operator, setOperator] = useState('+');

    const generateCaptcha = () => {
        const operators = ['+', '-', '*'];
        const selectedOperator = operators[Math.floor(Math.random() * operators.length)];

        let n1, n2;

        switch (selectedOperator) {
            case '+':
                n1 = Math.floor(Math.random() * 20) + 1;
                n2 = Math.floor(Math.random() * 20) + 1;
                break;
            case '-':
                n1 = Math.floor(Math.random() * 20) + 10;
                n2 = Math.floor(Math.random() * 10) + 1;
                break;
            case '*':
                n1 = Math.floor(Math.random() * 10) + 1;
                n2 = Math.floor(Math.random() * 10) + 1;
                break;
            default:
                n1 = Math.floor(Math.random() * 20) + 1;
                n2 = Math.floor(Math.random() * 20) + 1;
        }

        setNum1(n1);
        setNum2(n2);
        setOperator(selectedOperator);

        // Calculate the correct answer
        let result;
        switch (selectedOperator) {
            case '+':
                result = n1 + n2;
                break;
            case '-':
                result = n1 - n2;
                break;
            case '*':
                result = n1 * n2;
                break;
            default:
                result = n1 + n2;
        }

        onCaptchaChange(result.toString());
    };

    useEffect(() => {
        generateCaptcha();
    }, []);

    return (
        <div className={cn("space-y-2", className)}>
            <label className="text-sm font-medium text-gray-700">
                Security Verification
            </label>
            <Card className="p-4 bg-gradient-to-r from-gray-50 to-gray-100 border-2 border-dashed border-gray-300">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <span className="text-sm text-gray-600">What is:</span>
                        <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg border shadow-sm">
                            <span className="text-xl font-bold text-gray-800">{num1}</span>
                            <span className="text-xl font-bold text-blue-600">{operator}</span>
                            <span className="text-xl font-bold text-gray-800">{num2}</span>
                            <span className="text-xl font-bold text-gray-600">=</span>
                            <span className="text-xl font-bold text-red-500">?</span>
                        </div>
                    </div>
                    <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={generateCaptcha}
                        className="flex items-center gap-2 hover:bg-gray-50 transition-colors"
                    >
                        <RefreshCw className="h-4 w-4" />
                        New
                    </Button>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                    Please solve the math problem above to verify you're human
                </p>
            </Card>
        </div>
    );
}