'use client';

import { ArrowLeft, Calendar, CheckCircle, Clock, Mail, MapPin, Phone, Star, Users } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { serviceData } from '@/lib/all-service-paths-data'; // move your `serviceDetails` object into this file or separate module

export default function ServiceDetailClient({ category, subcategory }: { category: string; subcategory: string }) {


    const serviceDetails = {
        'puran-katha': {
            'bhagwat-katha': {
                name: 'Bhagwat Katha',
                description: 'The Bhagwat Katha is one of the most revered narrations in Hindu tradition, telling the divine stories of Lord Krishna and his devotees. This sacred recitation from the Shrimad Bhagwat Puran brings immense spiritual benefits and divine blessings to all participants.',
                fullDescription: `The Bhagwat Katha is a seven-day spiritual journey that takes devotees through the divine tales of Lord Krishna. Each day focuses on different aspects of Lord Krishna's life - from his birth in Mathura, his childhood in Vrindavan, his divine leelas, to his teachings in the Bhagwad Gita.

      This sacred narration is performed by learned pandits who have deep knowledge of Sanskrit and the spiritual significance of each story. The katha includes devotional songs, explanations of philosophical concepts, and interactive sessions where devotees can ask questions about spiritual practices.

      The ceremony creates a powerful spiritual atmosphere that purifies the mind, increases devotion, and brings peace to troubled hearts. Many devotees report experiencing profound spiritual transformations during the seven days of Bhagwat Katha.`,
                image: '/images/services/bhagwat-katha.jpg',
                duration: '7 Days',
                participants: '50-500',
                price: '₹25,000 - ₹1,50,000',
                benefits: [
                    'Spiritual purification and inner peace',
                    'Removal of negative karma and sins',
                    'Increased devotion and faith',
                    'Mental clarity and emotional stability',
                    'Divine blessings for family prosperity',
                    'Protection from evil influences'
                ],
                includes: [
                    'Daily 3-hour katha sessions',
                    'Complete Bhagwat Puran recitation',
                    'Devotional singing and music',
                    'Prasad distribution',
                    'Q&A sessions with learned pandits',
                    'Spiritual discourse and guidance'
                ]
            },
            'shiv-maha-puran': {
                name: 'Shiv Maha Puran Katha',
                description: 'A deeply spiritual narration of Lord Shiva’s divine plays, philosophies, and path to moksha from the Shiv Puran.',
                fullDescription: `Shiv Maha Puran Katha is a sacred discourse based on the Shiva Purana, one of the major Puranas that glorifies Lord Shiva as the supreme reality. The Katha details his incarnations, marriage with Parvati, Linga Mahima, Rudra Tandava, and more.

It provides profound insights into Shiva Tattva—detachment, destruction of ego, and eternal consciousness. This katha is ideal for spiritual transformation, healing, and blessings of peace and liberation.

Best conducted during Shravan month, Mahashivratri, or on auspicious Shiva tithis.`,

                image: '/images/services/shiv-maha-puran.jpg',
                duration: '3–7 Days',
                participants: '20–500+',
                price: '₹30,000 – ₹1,50,000+',
                benefits: [
                    'Blessings of Lord Shiva and peace of mind',
                    'Reduces planetary doshas and sins',
                    'Inspires spiritual wisdom and vairagya (detachment)',
                    'Ideal for seekers of moksha and inner purity',
                    'Promotes family unity and health'
                ],
                includes: [
                    'Shiva invocation and Kalash Sthapana',
                    'Daily narration with stories of Shiva Leelas',
                    'Bhajans, Rudra chants, and spiritual music',
                    'Optional Rudrabhishek or Laghu Rudra',
                    'Prasad and aarti daily',
                    'Conclusion with donation and spiritual tips'
                ]
            },
            'ram-katha': {
                name: 'Ram Katha',
                description: 'A devotional retelling of Lord Ram’s divine life, teaching righteousness, love, and ideal living from the Ramayana.',
                fullDescription: `Ram Katha is the sacred storytelling of Lord Ram’s life as depicted in Valmiki Ramayana, Ramcharitmanas (Tulsidas), or other versions. It narrates his divine birth, exile, battles, love for Sita, and victory over Ravana—symbolizing dharma's triumph over adharma.

This katha inspires ideal living, family values, devotion, and social harmony. It is often performed during Ram Navami, Diwali, or on special spiritual occasions.

The divine presence of Lord Ram brings peace, courage, and purification to the mind and soul.`,

                image: '/images/services/ram-katha.jpg',
                duration: '3–9 Days',
                participants: '50–1000+',
                price: '₹40,000 – ₹2,00,000+',
                benefits: [
                    'Blessings of Lord Ram, Sita, Lakshman, and Hanuman',
                    'Strengthens moral and family values',
                    'Helps overcome fear, grief, and inner turmoil',
                    'Teaches devotion, sacrifice, and dharma',
                    'Promotes harmony and mental stability'
                ],
                includes: [
                    'Sankalp, Ganesh and Ram Darbar invocation',
                    'Daily discourse with Ramayan recitation',
                    'Hanuman Chalisa and bhajans',
                    'Aarti and prasad for all participants',
                    'Optional Sundar Kand Paath or Hanuman Pooja',
                    'Cultural performances and Ram Leela (optional)'
                ]
            },
            'shrimad-devi-bhagwat-puran': {
                name: 'Shrimad Devi Bhagwat Puran Katha',
                description: 'A divine narrative focused on the glory of the Divine Mother and the power of Shakti in the universe.',
                fullDescription: `Shrimad Devi Bhagwat is one of the most important Shakta Puranas that extols Goddess Durga, Lakshmi, Saraswati, and other aspects of the Divine Feminine. The Katha includes her various avatars like Mahakali, Chandi, and Sati-Parvati, and emphasizes the path of Shakti worship.

It inspires devotees to surrender to the Devi for protection, wisdom, and success. It is ideal during Navratri, Chaitra/Sharadiya months, or for overcoming negativity and spiritual stagnation.

This katha fosters spiritual empowerment and connects the listener to divine motherly energy.`,

                image: '/images/services/shrimad-devi-bhagwat-puran.webp',
                duration: '3–9 Days',
                participants: '25–500+',
                price: '₹35,000 – ₹1,50,000+',
                benefits: [
                    'Blessings of all forms of the Goddess',
                    'Destroys fears, weaknesses, and negativity',
                    'Spiritual empowerment and emotional strength',
                    'Remedy for health issues and black magic',
                    'Ideal for women, families, and spiritual aspirants'
                ],
                includes: [
                    'Kalash Sthapana and Devi invocation',
                    'Daily Devi Katha with philosophical insights',
                    'Chandi Path or Durga Saptashati Paath (optional)',
                    'Bhajans, aarti, and prasad distribution',
                    'Kanya Pujan or Devi Havan on final day',
                    'Spiritual consultation and Sankalp guidance'
                ]
            }



        },
        'shanti-pooja': {
            'kaal-sarp-yog': {
                name: 'Kaal Sarp Yog Pooja',
                description: 'Kaal Sarp Yog is a significant astrological condition that occurs when all seven planets are positioned between Rahu and Ketu in one\'s birth chart. This powerful remedial pooja helps neutralize its malefic effects.',
                fullDescription: `Kaal Sarp Yog occurs in a person's horoscope when all the seven planets (Sun, Moon, Mars, Mercury, Jupiter, Venus, and Saturn) are hemmed between the shadow planets Rahu and Ketu. This creates challenges in various aspects of life including career, relationships, health, and spiritual growth.

      The Kaal Sarp Yog Pooja is specifically designed to pacify the malefic effects of this planetary combination. The ritual involves specific mantras, offerings, and ceremonies that are performed with great devotion and precision. The pooja creates positive vibrations that help balance the planetary energies and reduce their negative impact.

      This sacred ceremony is best performed at sacred places like Trimbakeshwar, Ujjain, or Nashik, but can also be conducted at home with proper arrangements. The ritual requires specific items, mantras, and procedures that our experienced pandits perform with complete authenticity.`,
                image: '/images/services/kaal-sarp-yog.jpg',
                duration: '1 Day (4-6 Hours)',
                participants: '1-10',
                price: '₹5,000 - ₹15,000',
                benefits: [
                    'Reduction in obstacles and challenges',
                    'Improved career and business prospects',
                    'Better health and mental peace',
                    'Enhanced relationships and marriage prospects',
                    'Financial stability and growth',
                    'Overall life improvement and success'
                ],
                includes: [
                    'Detailed horoscope analysis',
                    'Rahu-Ketu pacification mantras',
                    'Nagbali and Kaal Sarp Yog specific rituals',
                    'Havan with prescribed herbs',
                    'Donation and charity guidance',
                    'Post-pooja spiritual consultation'
                ]
            },

            'narayanbali-pitrushraddh-vidhi': {
                name: 'Narayanbali Pitrushraddh Vidhi',
                description: 'A powerful Vedic ritual to offer peace to departed ancestors and remove Pitru Dosha, ensuring harmony, prosperity, and family well-being.',
                fullDescription: `Narayanbali Pitrushraddh Vidhi is a sacred set of rituals performed to pacify the souls of ancestors and eliminate the negative effects of Pitru Dosha. Pitru Dosha occurs due to unsettled karmic debts of forefathers or improper ancestral rites, often leading to recurring problems in family life.

The Narayanbali Vidhi is performed for souls who met untimely death, while the Pitrushraddh ceremony offers food and prayers to satisfy the ancestral spirits. These rituals are essential for those experiencing delays in marriage, health issues, or financial instability believed to be caused by ancestral karma.

The ceremony is best conducted in holy sites like Trimbakeshwar or Gaya but can also be arranged at home by qualified priests with the correct procedure and materials.`,

                image: '/images/services/narayanbali.jpg',
                duration: '1 Day (5-7 Hours)',
                participants: '1-10',
                price: '₹7,000 - ₹20,000',
                benefits: [
                    'Relief from Pitru Dosha and ancestral curses',
                    'Peace and salvation to departed souls',
                    'Improved family health and prosperity',
                    'Resolution of recurring personal and family issues',
                    'Success in career, education, and relationships',
                    'Enhanced harmony and spiritual upliftment'
                ],
                includes: [
                    'Ancestral karma assessment via horoscope',
                    'Narayanbali rituals with specific Vedic chants',
                    'Pitrushraddh with offerings (Pind Daan, Tarpan)',
                    'Shraddh bhojan arrangements and Brahmin donations',
                    'Havan for Pitru Shanti',
                    'Spiritual consultation and post-pooja remedies'
                ]
            },
            'nakshatra-shanti': {
                name: 'Nakshatra Shanti Pooja',
                description: 'This pooja pacifies the birth star (Nakshatra) to eliminate doshas and bring emotional, spiritual, and physical balance to one’s life.',
                fullDescription: `Nakshatra Shanti Pooja is performed to appease the ruling Nakshatra (birth star) and its presiding deity, especially when the birth star is afflicted or during critical life events. Each Nakshatra influences one’s destiny, and when it's under malefic influence, it can cause various personal and professional disturbances.

This ritual is recommended for individuals facing unexplained delays, health concerns, emotional turbulence, or instability due to Nakshatra-related doshas. It is also beneficial during childbirth, birthdays, or Nakshatra transit periods.

The pooja involves personalized rituals and mantras based on the individual’s Nakshatra and is performed by experienced priests with Vedic precision.`,

                image: '/images/services/nakshatra.jpg',
                duration: '1 Day (3-5 Hours)',
                participants: '1-5',
                price: '₹4,000 - ₹12,000',
                benefits: [
                    'Removes Nakshatra doshas and planetary imbalances',
                    'Promotes emotional and mental well-being',
                    'Improves health, education, and relationships',
                    'Increases spiritual growth and inner stability',
                    'Mitigates obstacles caused by afflicted birth stars'
                ],
                includes: [
                    'Personalized horoscope and Nakshatra analysis',
                    'Special pooja to Nakshatra devata',
                    'Recitation of specific Nakshatra mantras',
                    'Havan with Nakshatra-aligned herbs and offerings',
                    'Charity and donations based on Nakshatra dosha',
                    'Post-pooja remedial suggestions'
                ]
            },
            'vastu-shanti': {
                name: 'Vastu Shanti Pooja',
                description: 'A sacred ritual performed to remove Vastu Dosha and harmonize the energy of a space for peace, prosperity, and well-being.',
                fullDescription: `Vastu Shanti Pooja is performed to correct imbalances in a home or office due to architectural or directional flaws as per Vastu Shastra. Such imbalances, known as Vastu Dosha, can cause health issues, financial instability, family disputes, and general discomfort in the space.

This pooja invokes blessings of Vastu Purusha and the ruling deities of the eight directions. It is highly recommended before entering a new property, during renovation, or when experiencing persistent negativity or setbacks at home or work.

Our expert priests conduct this ritual with Vedic procedures to energize the environment and invite harmony, happiness, and divine protection into the premises.`,

                image: '/images/services/vastu.jpg',
                duration: '1 Day (4-6 Hours)',
                participants: '1-15',
                price: '₹6,000 - ₹18,000',
                benefits: [
                    'Eliminates Vastu-related negativities',
                    'Creates a positive and balanced environment',
                    'Promotes health, wealth, and family harmony',
                    'Enhances productivity and mental peace',
                    'Protects from unknown losses and disturbances'
                ],
                includes: [
                    'Assessment of Vastu Dosha in the property',
                    'Kalash Sthapana and invocation of Vastu Purusha',
                    'Havan for Vastu Devta and directional deities',
                    'Navgraha pacification rituals',
                    'Use of special herbs and offerings',
                    'Recommendations for Vastu remedies and layout corrections'
                ]
            },
            'nav-grah-shanti': {
                name: 'Nav Grah Shanti Pooja',
                description: 'A powerful Vedic ritual to pacify all nine planetary deities and reduce their malefic influence for overall well-being and success.',
                fullDescription: `Nav Grah Shanti Pooja is performed to appease the nine planetary deities—Surya (Sun), Chandra (Moon), Mangal (Mars), Budh (Mercury), Guru (Jupiter), Shukra (Venus), Shani (Saturn), Rahu, and Ketu. These planets significantly influence one’s destiny, karma, health, and prosperity.

When planetary positions in the birth chart are unfavorable, it may lead to delays, losses, health issues, and mental stress. This pooja is especially recommended during major life transitions, Sade Sati, Rahu-Ketu Mahadasha, or planetary transits.

Our experienced priests conduct this ritual with Vedic chants, havan, and offerings specific to each planet, helping to neutralize negative energies and invoke divine grace.`,

                image: '/images/services/nav-grah.jpg',
                duration: '1 Day (4-6 Hours)',
                participants: '1-10',
                price: '₹6,000 - ₹16,000',
                benefits: [
                    'Balances planetary energies in the horoscope',
                    'Minimizes effects of malefic planets and doshas',
                    'Enhances success in career, education, and relationships',
                    'Improves health and emotional stability',
                    'Removes obstacles from ongoing or new ventures'
                ],
                includes: [
                    'Detailed horoscope analysis and Graha assessment',
                    'Navgraha mantra chanting and japa',
                    'Havan with specific offerings for each planet',
                    'Installation of Navgraha yantras if required',
                    'Donation and charity as per Graha Shanti rituals',
                    'Post-pooja remedies and planetary alignment suggestions'
                ]
            }
        },
        'havan': {
            'marriage-ceremony': {
                name: 'Marriage Ceremony (Vivah Sanskar)',
                description: 'A sacred Vedic ritual uniting two souls in a spiritual, emotional, and social bond for a lifetime of harmony and prosperity.',
                fullDescription: `The Marriage Ceremony, also known as Vivah Sanskar, is one of the most important and auspicious rites of passage in Hindu culture. This sacred union is not just a physical or emotional bond but a spiritual commitment between two individuals, witnessed by the deities, family, and society.

The ceremony involves a sequence of rituals including Ganesh Pooja, Kanyadaan, Vivaah Homa, Mangal Pheras, Saptapadi, and Sindoor Daan, all conducted as per traditional Vedic scriptures. Each ritual carries deep spiritual and symbolic significance, aiming to bless the couple with love, prosperity, fertility, and lifelong companionship.

Our team ensures complete Vedic authenticity, customized arrangements based on regional traditions, and a seamless ceremonial experience for the bride, groom, and families.`,

                image: '/images/services/marriage.jpg',
                duration: '1 Day (6-8 Hours)',
                participants: '50-200 (including guests)',
                price: '₹21,000 - ₹1,00,000+ (customized as per scale)',
                benefits: [
                    'Spiritual sanctification of the marital bond',
                    'Blessings for a harmonious and prosperous married life',
                    'Strong emotional and cultural grounding',
                    'Positive planetary alignment for the couple',
                    'Fertility, longevity, and mutual understanding'
                ],
                includes: [
                    'Muhurat (auspicious date & time) selection via horoscope',
                    'Mandap setup and decoration guidance',
                    'Complete set of Vedic marriage rituals',
                    'Pooja samagri (items) and priest arrangements',
                    'Sankalp and family participation coordination',
                    'Post-marriage grihapravesh & blessings rituals'
                ]
            },
            'shat-chandi-yagna': {
                name: 'Shat Chandi Yagna',
                description: 'A highly potent and elaborate Vedic yagna performed to invoke the blessings of Goddess Durga for protection, victory, and destruction of evil.',
                fullDescription: `Shat Chandi Yagna is one of the most powerful and revered yagnas in Hindu tradition, dedicated to Goddess Durga and her various fierce and protective forms. The ritual involves the recitation of the Durga Saptashati (700 verses from the Markandeya Purana) along with multiple homas and offerings.

This yagna is particularly effective during Navratri, special occasions, or when facing intense obstacles in life due to negative energies, black magic, legal issues, or business downfall. The collective chanting and fire rituals create a powerful shield of divine protection and spiritual elevation.

It requires a team of qualified priests and is conducted over one or more days, depending on the scale and purpose.`,

                image: '/images/services/shat-chandi.jpg',
                duration: '1-3 Days (as per requirement)',
                participants: '5-50 (family & invitees)',
                price: '₹51,000 - ₹2,00,000+ (based on scale)',
                benefits: [
                    'Destruction of enemies and evil influences',
                    'Victory in legal, financial, and personal matters',
                    'Spiritual growth and divine protection',
                    'Removal of black magic and negative energy',
                    'Peace, prosperity, and family harmony'
                ],
                includes: [
                    'Recitation of 700 verses of Durga Saptashati',
                    'Multiple homas (Agni rituals) with sacred items',
                    'Kalash Sthapana and invocation of Devi Shakti',
                    'Navarna mantra japa (108,000 times optional)',
                    'Offerings (Ahuti) with Samidha, ghee, and herbs',
                    'Brahmin bhojan and donation as per tradition'
                ]
            },
            'rudra-havan': {
                name: 'Rudra Havan',
                description: 'A sacred fire ritual dedicated to Lord Shiva in his fierce Rudra form, performed to purify the surroundings and remove negativity.',
                fullDescription: `Rudra Havan is a powerful Vedic fire ritual performed to appease Lord Shiva in his Rudra aspect—the fierce form that destroys evil and purifies the cosmos. This havan is highly beneficial for those facing health problems, financial instability, mental stress, or planetary doshas.

The core of the ritual is the chanting of Rudra Sukta and mantras from the Yajurveda, combined with offerings made into the holy fire. The energy generated from this havan destroys negative energies, purifies the soul, and brings peace, protection, and prosperity.

It is especially effective when performed during auspicious days like Maha Shivratri, Shravan month, Pradosh, or Mondays.`,

                image: '/images/services/rudra-havan.jpeg',
                duration: '1 Day (3-5 Hours)',
                participants: '1-15',
                price: '₹5,000 - ₹18,000',
                benefits: [
                    'Purification of surroundings and personal energy',
                    'Removal of fear, illness, and mental stress',
                    'Appeasement of malefic planetary effects',
                    'Protection against negative forces and evil eye',
                    'Spiritual growth and divine blessings from Lord Shiva'
                ],
                includes: [
                    'Sankalp and Gauri Ganesh Pooja',
                    'Rudra Sukta chanting and japa',
                    'Offerings to the sacred fire with herbs and ghee',
                    'Kalash Sthapana and Abhishek items',
                    'Havan samagri and pooja items included',
                    'Post-havan advice and spiritual guidance'
                ]
            },
            'sri-suktam-havan': {
                name: 'Sri Suktam Havan',
                description: 'A divine fire ritual invoking Goddess Lakshmi through Sri Suktam mantras to attract wealth, prosperity, and auspiciousness.',
                fullDescription: `Sri Suktam Havan is a sacred Vedic ritual dedicated to Goddess Mahalakshmi, the deity of wealth, fortune, and prosperity. It involves the chanting of the revered Sri Suktam hymns from the Rigveda and offering sacred items into the fire to invoke her divine presence and blessings.

This havan is highly recommended for those seeking financial stability, growth in business, removal of poverty, and the elimination of misfortune. It is best performed during Fridays, full moon days, Diwali, or any auspicious Lakshmi pooja occasions.

Through this havan, one not only attracts material wealth but also spiritual richness and inner contentment by aligning with divine energies.`,

                image: '/images/services/sri-suktam.jpg',
                duration: '1 Day (2-4 Hours)',
                participants: '1-10',
                price: '₹4,000 - ₹14,000',
                benefits: [
                    'Increases wealth and financial abundance',
                    'Removes poverty and karmic financial blocks',
                    'Brings harmony and auspiciousness in home',
                    'Improves success in business and investments',
                    'Enhances inner peace and gratitude'
                ],
                includes: [
                    'Goddess Lakshmi invocation and Sankalp',
                    'Chanting of Sri Suktam and Lakshmi mantras',
                    'Havan with sacred herbs, lotus seeds, and ghee',
                    'Offerings of kumkum, rice, and flowers to the deity',
                    'Distribution of prasad and donation rituals',
                    'Post-havan financial and spiritual advice'
                ]
            },
            'maha-mrityunjay-jap': {
                name: 'Maha Mrityunjay Jap',
                description: 'A powerful chanting ritual dedicated to Lord Shiva for healing, protection, and overcoming life-threatening obstacles.',
                fullDescription: `Maha Mrityunjay Jap is one of the most potent and revered Vedic rituals dedicated to Lord Shiva, performed to invoke his blessings for protection from untimely death, severe illness, and other life-threatening dangers. The mantra—"Om Tryambakam Yajamahe..."—is a Moksha mantra from the Rigveda and is believed to rejuvenate health, extend life, and liberate the soul from fear and suffering.

This jap is especially recommended for individuals suffering from chronic diseases, those undergoing major surgeries, or people facing persistent life hurdles. It brings physical, emotional, and spiritual healing and promotes longevity, peace, and strength.

The chant is typically repeated 11,000 to 125,000 times, with or without a havan, depending on the sankalp taken.`,

                image: '/images/services/maha-mrityunjay.jpg',
                duration: '1-3 Days (based on chant count)',
                participants: '1-5',
                price: '₹6,000 - ₹25,000+ (as per repetitions)',
                benefits: [
                    'Protection from accidents, illness, and untimely death',
                    'Faster recovery from medical conditions and surgeries',
                    'Removes fear, anxiety, and emotional blocks',
                    'Strengthens mental and spiritual resilience',
                    'Bestows peace, health, and longevity'
                ],
                includes: [
                    'Personalized sankalp (intention setting)',
                    'Maha Mrityunjay mantra chanting by expert priests',
                    'Optional havan for energy invocation',
                    'Offerings of bilva leaves, milk, and holy water',
                    'Lord Shiva Abhishekam (ritual bathing)',
                    'Post-jap guidance and healing recommendations'
                ]
            },
            'vishnu-yagna': {
                name: 'Vishnu Yagna',
                description: 'A sacred Vedic ritual dedicated to Lord Vishnu for harmony, prosperity, and overall well-being of the family and society.',
                fullDescription: `Vishnu Yagna is a highly auspicious fire ritual performed to invoke the blessings of Lord Vishnu—the preserver and sustainer of the universe. Known for his qualities of protection, stability, and mercy, Lord Vishnu is worshipped to maintain balance in life, protect dharma, and ensure the success of righteous efforts.

This yagna is ideal for individuals or families seeking peace at home, material and spiritual well-being, and divine grace in all life pursuits. It is often performed on Ekadashi, Vaikuntha Ekadashi, or during significant life transitions like housewarming, childbirth, and marriage.

The ritual includes Vishnu Sahasranama chanting, havan with prescribed offerings, and invoking the ten incarnations (Dashavatara) for universal and personal harmony.`,

                image: '/images/services/vishnu-yagna.jpg',
                duration: '1 Day (3-5 Hours)',
                participants: '1-15',
                price: '₹5,000 - ₹20,000',
                benefits: [
                    'Brings peace and prosperity to the household',
                    'Removes negativity and promotes harmony',
                    'Protects from misfortune and uncertainty',
                    'Enhances career, health, and family relationships',
                    'Promotes spiritual growth and stability in life'
                ],
                includes: [
                    'Invocation of Lord Vishnu and Dashavatara',
                    'Chanting of Vishnu Sahasranama or Vedic stotras',
                    'Havan with tulsi, rice, and ghee offerings',
                    'Kalash Sthapana and Vaishnava rituals',
                    'Prasad distribution and charity guidance',
                    'Post-yagna spiritual consultation'
                ]
            }, 'ganesh-yagna': {
                name: 'Ganesh Yagna',
                description: 'A powerful Vedic fire ritual to invoke Lord Ganesha’s blessings for removing obstacles and ensuring success in new ventures and life events.',
                fullDescription: `Ganesh Yagna is a sacred ritual dedicated to Lord Ganesha, the remover of obstacles and the god of wisdom, intellect, and new beginnings. This yagna is ideal before starting any important task—be it a business venture, marriage, home entry, or educational pursuit.

By invoking Lord Ganesha through mantras and offerings into the sacred fire, this yagna ensures the smooth execution of plans, removes negativity, and grants clarity, courage, and auspicious results.

Ganesh Yagna is especially effective when performed on Sankashti Chaturthi, Ganesh Chaturthi, or during any Shubha Muhurat (auspicious occasion). It is simple yet extremely potent in its positive impact.`,

                image: '/images/services/ganesh-yagna.jpg',
                duration: '1 Day (2-3 Hours)',
                participants: '1-10',
                price: '₹3,500 - ₹12,000',
                benefits: [
                    'Removes obstacles from personal and professional life',
                    'Ensures success in new beginnings and ventures',
                    'Promotes intelligence, focus, and wisdom',
                    'Protects from negative energies and failures',
                    'Blesses with harmony and good fortune'
                ],
                includes: [
                    'Sankalp and Ganesha Avahan (invocation)',
                    'Ganapati Atharvashirsha or mantra chanting',
                    'Havan with durva grass, modak, and ghee',
                    'Offerings and aarti to Lord Ganesha',
                    'Distribution of modak prasad',
                    'Post-yagna remedies and blessings'
                ]
            }, 'navchandi-yagna': {
                name: 'Navchandi Yagna',
                description: 'A grand and highly potent fire ritual performed to invoke the combined energy of the nine forms of Goddess Durga for protection, strength, and victory.',
                fullDescription: `Navchandi Yagna is an extensive and powerful ritual dedicated to the nine manifestations of Goddess Durga (Nav Durga). It includes the recitation of Durga Saptashati, elaborate homas, and special offerings aimed at removing evil forces, black magic, and planetary doshas, while ensuring divine protection and blessings.

This yagna is ideal for overcoming severe hardships, facing critical situations like legal issues or business failure, or for those who seek spiritual transformation, courage, and inner strength. It is especially auspicious during Navratri, Chaitra, Ashwin months, or any Shakti festival.

Performed by a group of well-versed priests over a full day (or more), the yagna creates a protective spiritual shield around the individual or family for lasting peace and prosperity.`,

                image: '/images/services/navchandi-yagna.jpeg',
                duration: '1-2 Days (depending on scale)',
                participants: '5-50 (family & guests)',
                price: '₹51,000 - ₹2,00,000+ (customized)',
                benefits: [
                    'Destroys enemies and dark influences',
                    'Removes fear, anxiety, and internal conflicts',
                    'Ensures victory in legal and professional matters',
                    'Blessings of all nine forms of Goddess Durga',
                    'Promotes overall protection, strength, and success'
                ],
                includes: [
                    'Durga Saptashati complete chanting (13 chapters)',
                    'Navchandi Havan with special samidhas and herbs',
                    'Kalash Sthapana and Nav Durga Avahan',
                    'Mantras for Rahu, Ketu, and Shani pacification',
                    'Offerings of fruits, grains, honey, and ghee',
                    'Brahmin feeding and donation as per scriptures'
                ]
            }
        },
        'sanskar-vidhi': {
            'chaul-sanskar': {
                name: 'Chaul Sanskar',
                description: 'A traditional Hindu samskara marking a child’s first haircut, symbolizing purification and the beginning of education and discipline.',
                fullDescription: `Chaul Sanskar, also known as Mundan Sanskar, is one of the key rites of passage (samskaras) in Hindu tradition. It is performed to cleanse the child of negative energies carried from past lives and to promote healthy growth of the body, mind, and intellect. Symbolically, it marks the beginning of discipline and learning.

Traditionally performed in the 1st, 3rd, or 5th year of a child’s life, this ceremony is believed to strengthen memory, improve mental clarity, and enhance spiritual sensitivity. It is accompanied by Vedic rituals, mantras, blessings, and symbolic offerings to deities.

The ceremony is conducted at home or in a temple, with the presence of family, elders, and priests to bless the child’s growth and development.`,

                image: '/images/services/chaul-sanskar.jpg',
                duration: '1 Day (2-3 Hours)',
                participants: '5-20',
                price: '₹3,000 - ₹10,000',
                benefits: [
                    'Spiritual purification and karmic cleansing',
                    'Supports healthy mental and emotional development',
                    'Improves focus, memory, and learning ability',
                    'Blessings for long life and righteous growth',
                    'Initiates child into family traditions and culture'
                ],
                includes: [
                    'Ganesh Pooja and Sankalp',
                    'Chaul (hair cutting) ritual by priest or barber',
                    'Mantra chanting and homa for purification',
                    'Blessings from elders and family members',
                    'Offering of hair to holy river or deity',
                    'Distribution of prasad and family bhojan'
                ]
            },
            'namkaran-sanskar': {
                name: 'Namkaran Sanskar',
                description: 'The sacred naming ceremony of a newborn, performed to bestow identity, blessings, and positive vibrations for a prosperous life.',
                fullDescription: `Namkaran Sanskar is the traditional Hindu ceremony of naming a newborn child, typically performed on the 11th, 12th, or 21st day after birth. It is the first public acknowledgment of the child's identity and an important samskara that connects the child to family, culture, and divine blessings.

This ceremony is performed with Vedic rituals that include chanting of mantras, horoscope analysis for auspicious letters, and invoking deities for the child’s protection, health, and prosperity. It is a joyous occasion celebrated in the presence of family and friends.

The name chosen reflects the child’s astrological chart and nakshatra, ensuring that the vibrations align with their destiny and well-being.`,

                image: '/images/services/namkaran-sanskar.jpg',
                duration: '1 Day (1.5-2 Hours)',
                participants: '5-30',
                price: '₹3,000 - ₹8,000',
                benefits: [
                    'Establishes spiritual and social identity of the child',
                    'Invokes blessings for health, fortune, and longevity',
                    'Name aligned with child’s astrological chart',
                    'Protects child from negative energies and doshas',
                    'Connects child to dharma, culture, and ancestry'
                ],
                includes: [
                    'Ganesh Pooja and Sankalp for the newborn',
                    'Horoscope-based name suggestion by priest',
                    'Mantra chanting and family blessings',
                    'Aarti and havan for protection and good fortune',
                    'Name announcement with rituals',
                    'Prasad distribution and optional bhojan'
                ]
            },
            'srimant-sanskar': {
                name: 'Srimant Sanskar (Godh Bharai)',
                description: 'A joyous Vedic ceremony to bless the expectant mother and unborn child with health, prosperity, and divine protection.',
                fullDescription: `Srimant Sanskar, also known as Godh Bharai or baby shower, is a sacred Hindu ritual performed during the 7th or 8th month of pregnancy to bless the mother-to-be and her unborn baby. It marks a spiritually significant milestone in the journey toward childbirth and motherhood.

The ceremony includes Vedic chants, offerings to deities, and blessings from elders. The expectant mother is adorned with gifts, fruits, and sweets as a symbol of abundance and nurturing. It is a time for family joy, protection rituals, and invoking divine energies for a safe and healthy delivery.

This sanskar not only uplifts the mother emotionally and spiritually but also creates a vibrant and blessed atmosphere for the baby’s arrival.`,

                image: '/images/services/srimant-sanskar.jpg',
                duration: '1 Day (2-3 Hours)',
                participants: '10-50',
                price: '₹4,000 - ₹15,000',
                benefits: [
                    'Blessings for healthy pregnancy and safe delivery',
                    'Emotional support and spiritual positivity for mother',
                    'Invokes divine protection for the unborn child',
                    'Strengthens family bonds and tradition',
                    'Removes doshas or negative planetary influences'
                ],
                includes: [
                    'Ganesh and Gauri Pooja for blessings',
                    'Sankalp and ritual for expectant mother',
                    'Chanting of Vedic mantras and shlokas',
                    'Offering of fruits, sweets, bangles, and gifts',
                    'Blessings from elders and priest',
                    'Prasad distribution and optional feast (bhojan)'
                ]
            },
            'yagnopavit-sanskar': {
                name: 'Yagnopavit Sanskar (Upanayanam)',
                description: 'A sacred thread ceremony marking the spiritual initiation of a child into education, discipline, and Vedic learning.',
                fullDescription: `Yagnopavit Sanskar, also known as Upanayanam, is one of the most important samskaras in Hindu tradition. It marks the formal initiation of a young boy (and in some traditions, girls) into the path of learning, spirituality, and Vedic studies. During the ceremony, the child is adorned with the sacred thread (yajnopavita) and taught the Gayatri Mantra for the first time.

This rite of passage symbolizes the transition from childhood into disciplined spiritual and educational life. It is traditionally performed between the ages of 8 to 16 and signifies readiness to take on dharmic responsibilities.

The ceremony involves purificatory rituals, chanting of mantras, fire rituals (havan), and blessings from parents, gurus, and elders to guide the child toward a righteous life.`,

                image: '/images/services/Yagnopavit-Sanskar.png',
                duration: '1 Day (4-6 Hours)',
                participants: '10-40',
                price: '₹7,000 - ₹25,000',
                benefits: [
                    'Initiation into spiritual and academic life',
                    'Grants child the right to study scriptures and perform rituals',
                    'Instills discipline, focus, and responsibility',
                    'Blessings for wisdom, purity, and character development',
                    'Strengthens connection to dharma and tradition'
                ],
                includes: [
                    'Ganesh Pooja and Sankalp',
                    'Havan and purification rituals',
                    'Thread ceremony and wearing of Yagnopavit',
                    'Teaching of Gayatri Mantra and rituals of daily worship',
                    'Blessings from parents, guru, and elders',
                    'Prasad distribution and traditional bhojan'
                ]
            }
        },
        'sthapan-pooja': {
            'ghat-sthapna': {
                name: 'Ghat Sthapna',
                description: 'A foundational Vedic ritual that marks the beginning of major pujas or festivals, symbolizing the invocation of divine presence.',
                fullDescription: `Ghat Sthapna, also known as Kalash Sthapana, is a sacred ritual that marks the commencement of major Vedic ceremonies and festivals like Navratri, Durga Pooja, or Satyanarayan Katha. It involves the installation of a Kalash (sacred water pot) which represents the divine presence of deities.

The Kalash is filled with water, topped with mango leaves and a coconut, and decorated with sacred threads and symbols. Mantras and invocations are chanted to invite divine energies to reside in the Kalash throughout the duration of the ritual or festival.

This ritual acts as a spiritual foundation for invoking blessings, prosperity, and success in any pooja, yagna, or auspicious occasion.`,

                image: '/images/services/ghat-sthapna.jpg',
                duration: '1 Day (1-2 Hours)',
                participants: '1-10',
                price: '₹1,500 - ₹5,000',
                benefits: [
                    'Invokes divine presence to sanctify the pooja or event',
                    'Purifies the environment and energizes the space',
                    'Brings auspiciousness and success to rituals',
                    'Ensures spiritual alignment for the ceremony',
                    'Acts as a divine channel for blessings'
                ],
                includes: [
                    'Sankalp and Ganesh Pooja',
                    'Preparation and installation of the Kalash',
                    'Chanting of Vedic mantras for invocation',
                    'Decorating the Kalash with coconut, leaves, and symbols',
                    'Placement as per tradition and pooja type',
                    'Guidance on how to maintain the Kalash during the pooja period'
                ]
            },
            'rudra-abhishek': {
                name: 'Rudra Abhishek',
                description: 'A sacred bathing ritual of Lord Shiva performed with Vedic chants to seek blessings for health, prosperity, and liberation from suffering.',
                fullDescription: `Rudra Abhishek is one of the most powerful and spiritually uplifting rituals dedicated to Lord Shiva. It involves the ceremonial bathing (abhishek) of the Shiva Lingam with sacred substances like milk, honey, curd, ghee, sugar, water, bilva leaves, and more, while chanting the Rudra Sukta and Shiva mantras from the Yajurveda.

This ritual pleases Lord Shiva in his Rudra form—the destroyer of evil and granter of inner peace and moksha (liberation). It is especially beneficial for removing negativity, curing diseases, calming planetary afflictions, and achieving material and spiritual upliftment.

Rudra Abhishek is best performed on Mondays, during Shravan month, Maha Shivratri, Pradosh, or any Shiva-related festival.`,

                image: '/images/services/rudra-abhishek.jpg',
                duration: '1 Day (1.5-3 Hours)',
                participants: '1-20',
                price: '₹3,000 - ₹10,000',
                benefits: [
                    'Removes negative karma and suffering',
                    'Blessings for good health, peace, and success',
                    'Neutralizes malefic effects of planets like Shani and Rahu',
                    'Improves mental clarity and spiritual energy',
                    'Attracts prosperity and divine grace of Lord Shiva'
                ],
                includes: [
                    'Sankalp and Ganesh invocation',
                    'Rudra Sukta and Shiva mantra chanting',
                    'Abhishek with milk, water, honey, curd, ghee, and bilva leaves',
                    'Shiva Aarti and Prasad distribution',
                    'Guidance on post-abhishek prayer and vrat',
                    'Donation and spiritual advice (if required)'
                ]
            },
            'laghu-rudra': {
                name: 'Laghu Rudra Pooja',
                description: 'An advanced and powerful Vedic ritual dedicated to Lord Shiva, performed to attain spiritual upliftment, peace, and success in all spheres of life.',
                fullDescription: `Laghu Rudra is an elaborate and high-energy form of worship dedicated to Lord Shiva, particularly in his Rudra form. It involves the chanting of Rudri (Rudra Namakam and Chamakam) from the Yajurveda 11 times along with powerful Abhishek and homa rituals.

Considered one of the most effective remedies for health, wealth, planetary doshas, and spiritual advancement, Laghu Rudra is ideal for individuals facing major life obstacles, chronic illness, business setbacks, or spiritual stagnation.

This pooja is usually performed by a group of Vedic priests over several hours with precise rituals, Abhishek with sacred items, and fire offerings to invoke the blessings of Shiva for total transformation.`,

                image: '/images/services/laghu-rudra.jpg',
                duration: '1 Day (6-8 Hours)',
                participants: '1-25',
                price: '₹15,000 - ₹50,000',
                benefits: [
                    'Removes major doshas, curses, and negative energies',
                    'Grants relief from chronic health problems and fears',
                    'Enhances prosperity, clarity, and emotional strength',
                    'Spiritual purification and deeper divine connection',
                    'Appeasement of malefic planets like Shani, Rahu, and Ketu'
                ],
                includes: [
                    'Sankalp and Ganesh Pooja',
                    '11 recitations of Rudram (Namakam + Chamakam)',
                    'Abhishek with 11 sacred items including milk, curd, honey, ghee, and bilva leaves',
                    'Homa with Rudra mantras and fire offerings',
                    'Brahmin Dakshina and donation as per tradition',
                    'Post-pooja guidance for personal and spiritual growth'
                ]
            },
            'maha-rudra-pooja': {
                name: 'Maha Rudra Pooja',
                description: 'An extensive and highly auspicious ritual invoking Lord Shiva’s energy to eliminate karmic blocks, grant health, wealth, and spiritual liberation.',
                fullDescription: `Maha Rudra Pooja is a grand-scale Vedic ceremony performed to worship Lord Shiva through the 121 recitations of the Rudram (Namakam and Chamakam). It is significantly more powerful than Laghu Rudra and is ideal for those seeking total transformation in life—physically, mentally, and spiritually.

This Pooja is recommended for those facing long-standing obstacles, critical illnesses, family discord, or planetary afflictions. It is also performed by those desiring spiritual elevation, wealth, peace, and fulfillment of desires.

Performed by a large group of learned Vedic priests, the ritual includes elaborate Abhishek of the Shiva Lingam with sacred items, powerful chanting, and fire offerings. It generates immense spiritual vibrations, creating a protective and transformative energy field around the devotee and family.`,

                image: '/images/services/maha-rudra-pooja.webp',
                duration: '1-2 Days (as per scale)',
                participants: '10-100',
                price: '₹51,000 - ₹1,50,000+',
                benefits: [
                    'Destroys negative karma and lifelong obstacles',
                    'Cures chronic health conditions and grants longevity',
                    'Powerful remedy for planetary doshas and black magic',
                    'Grants peace of mind, wealth, and family harmony',
                    'Accelerates spiritual growth and leads to inner purification'
                ],
                includes: [
                    'Sankalp and Ganapati invocation',
                    '121 Rudram recitations (Namakam & Chamakam)',
                    'Elaborate Rudra Abhishek with 11+ sacred substances',
                    'Havan with special herbs, samidhas, and ghee',
                    'Kalash Sthapana and Vedic chanting by 11+ pandits',
                    'Brahmin dakshina, bhojan, and donation guidance'
                ]
            },
            'ati-rudra-pooja': {
                name: 'Ati Rudra Pooja',
                description: 'The highest and most powerful form of Rudra worship, invoking Lord Shiva 14641 times through intense Vedic chanting and rituals for universal peace and personal liberation.',
                fullDescription: `Ati Rudra Pooja is the most elaborate and spiritually intense form of Rudra worship, described in the Yajurveda. It involves the chanting of the Rudram (Namakam and Chamakam) 14641 times—performed by 121 priests over 11 days or in an accelerated format—combined with massive scale Abhishek and homa rituals.

This pooja is rarely performed due to its scale, but when done, it brings immense spiritual merit (punya), healing of deep karmic burdens, and divine grace. It is typically organized for global peace, individual moksha (liberation), or for resolution of impossible situations such as incurable diseases, generational curses, or spiritual awakening.

It creates powerful spiritual vibrations capable of uplifting entire communities, purifying environments, and invoking the purest aspect of Lord Shiva's compassion and power.`,

                image: '/images/services/ati-rudra-pooja.jpg',
                duration: '3-11 Days (depending on format)',
                participants: '50-300 (public or family-sponsored)',
                price: '₹2,00,000 - ₹10,00,000+',
                benefits: [
                    'Burns accumulated karmas across lifetimes',
                    'Grants moksha, divine protection, and higher consciousness',
                    'Cures deeply rooted diseases and spiritual blockages',
                    'Establishes peace in home, society, and the world',
                    'Invokes the most powerful form of Lord Shiva’s blessings'
                ],
                includes: [
                    'Sankalp and Gauri Ganesh Pooja',
                    '14641 Rudra chantings (121 priests × 121 recitations)',
                    'Grand Rudra Abhishek with 100+ sacred substances',
                    'Multiple homas for universal peace and well-being',
                    'Kalash Sthapana and daily rituals',
                    'Mass Brahmin feeding, donation, and cultural activities'
                ]
            },
            'murti-pranpratishtha': {
                name: 'Murti Pranpratishtha',
                description: 'A sacred Vedic ceremony performed to invoke divine energy into a new deity idol, transforming it from a sculpture into a living embodiment of the divine.',
                fullDescription: `Murti Pranpratishtha is a highly revered ritual in Hindu tradition, marking the consecration of a deity idol (murti) in temples, homes, or public spaces. Through this ceremony, divine energy is invoked into the idol using elaborate Vedic rituals, transforming it from a lifeless form into a spiritually potent and living presence of the deity.

The ceremony involves purificatory rites (Shuddhi), Nyasa (placement of mantras into different parts of the murti), and Pranpratishtha (breathing life through mantras and mudras). This ritual is essential before any murti is worshipped and ensures that the space becomes a center of divine energy, blessings, and positive vibrations.

Performed by experienced priests, this ritual is both spiritually profound and culturally significant, requiring detailed preparation, devotion, and precision.`,

                image: '/images/services/murti-pranpratishtha.webp',
                duration: '1-2 Days (depending on deity and scale)',
                participants: '10-100',
                price: '₹25,000 - ₹1,00,000+',
                benefits: [
                    'Transforms the idol into a living presence of the deity',
                    'Sanctifies temples, homes, or public worship spaces',
                    'Invokes divine blessings, protection, and prosperity',
                    'Establishes a powerful spiritual connection with the deity',
                    'Enhances the purity and energy of the environment'
                ],
                includes: [
                    'Shuddhi (cleansing) of idol and premises',
                    'Sankalp and Ganapati invocation',
                    'Nyasa and mantra placement in the idol',
                    'Pranpratishtha and Netra (eye-opening) rituals',
                    'Pooja, aarti, havan, and kalash sthapana',
                    'Festive celebration with prasad, bhajans, and donation guidance'
                ]
            }
        },
        'festival-pooja': {
            'office-pooja': {
                name: 'Office Pooja',
                description: 'A spiritual ritual conducted to bless your workplace with prosperity, harmony, and success by invoking divine energies.',
                fullDescription: `Office Pooja is a special Vedic ritual performed to purify, energize, and bless a business premises or professional space. It is commonly done during office inaugurations, annual celebrations, or after major renovations. The pooja invites divine energies and removes obstacles that may hinder financial growth or team harmony.

The ritual includes the worship of Lord Ganesha (remover of obstacles), Goddess Lakshmi (goddess of wealth), and Navagrahas (nine planets) to ensure success in business operations, stability, and positive relationships among employees and clients.

Office Pooja can be customized based on the nature of the business and the spiritual preferences of the founders, ensuring a personalized and auspicious start or continuation of professional ventures.`,

                image: '/images/services/office-pooja.png',
                duration: '1 Day (1.5-3 Hours)',
                participants: '5-50',
                price: '₹3,000 - ₹15,000',
                benefits: [
                    'Removes negative energies and vastu defects from workplace',
                    'Invokes blessings for growth, stability, and financial success',
                    'Strengthens team unity and positivity in the work environment',
                    'Protects business from legal, financial, and market risks',
                    'Establishes divine support for new projects and deals'
                ],
                includes: [
                    'Ganesh and Lakshmi Pooja with Sankalp',
                    'Navagraha Shanti and vastu correction rituals',
                    'Havan with herbal samidhas for space purification',
                    'Installation of spiritual yantras or symbols if needed',
                    'Aarti, prasad distribution, and donation guidance',
                    'Post-pooja vastu and spiritual suggestions for office'
                ]
            },
            'diwali-pooja': {
                name: 'Diwali Pooja',
                description: 'A traditional ritual performed on the night of Diwali to invoke Goddess Lakshmi and Lord Ganesha for wealth, happiness, and prosperity.',
                fullDescription: `Diwali Pooja, also known as Lakshmi-Ganesh Pooja, is the central ritual of the Diwali festival, performed during the evening hours on the new moon day (Amavasya) of Kartik month. This sacred ceremony is dedicated to Goddess Lakshmi—the goddess of wealth—and Lord Ganesha, the remover of obstacles.

It is believed that on this auspicious night, Lakshmi visits homes that are clean, well-lit, and spiritually prepared. The pooja is performed to attract her blessings for wealth, success, harmony, and abundance in the coming year.

The rituals include traditional offerings, lighting diyas (lamps), chanting mantras, and invoking blessings for business, family, and spiritual growth. It is one of the most spiritually and materially significant pujas of the Hindu calendar.`,

                image: '/images/services/diwali-pooja.jpg',
                duration: '1 Day (1.5-2 Hours)',
                participants: 'Family or Office Members (5-30)',
                price: '₹2,000 - ₹10,000',
                benefits: [
                    'Invokes wealth, prosperity, and happiness for the year ahead',
                    'Removes financial obstacles and negativity from the home or office',
                    'Creates spiritual protection and harmony in the environment',
                    'Blesses business ventures and personal growth',
                    'Promotes peace, joy, and divine energy during Diwali'
                ],
                includes: [
                    'Ganesh and Lakshmi Pooja with Sankalp',
                    'Kalash Sthapana and diya lighting',
                    'Chanting of Lakshmi Ashtottara and Ganesh mantras',
                    'Offerings of sweets, coins, flowers, and kumkum',
                    'Aarti, prasad distribution, and donation guidance',
                    'Optional inclusion of Lakshmi Yantra or coin energization'
                ]
            },
            'navratri-pooja': {
                name: 'Navratri Pooja',
                description: 'A powerful nine-day worship of Goddess Durga in her nine divine forms to invoke strength, protection, and spiritual energy.',
                fullDescription: `Navratri Pooja is a sacred and spiritually vibrant festival celebrated over nine nights to honor the nine manifestations of Goddess Durga—Shailputri, Brahmacharini, Chandraghanta, Kushmanda, Skandamata, Katyayani, Kalaratri, Mahagauri, and Siddhidatri. Each day is dedicated to one form and involves specific rituals, colors, and offerings.

The pooja involves kalash sthapana (Ghat Sthapna), daily aarti, chanting of Durga Saptashati, and fasting. It helps devotees overcome inner weaknesses, gain spiritual discipline, and receive the powerful blessings of the Divine Mother.

Navratri is observed twice a year—Chaitra (spring) and Sharad (autumn)—and is ideal for spiritual seekers, families, and anyone seeking divine intervention in personal and professional matters.`,

                image: '/images/services/navratri-pooja.png',
                duration: '9 Days (or single day)',
                participants: 'Individual or Group (5-100)',
                price: '₹5,000 - ₹50,000 (based on scale)',
                benefits: [
                    'Empowers inner strength and spiritual progress',
                    'Protects from negative energies and challenges',
                    'Blessings of all nine forms of Goddess Durga',
                    'Promotes health, harmony, and prosperity',
                    'Ideal for wish-fulfillment, success, and peace of mind'
                ],
                includes: [
                    'Kalash Sthapana and daily Durga Avahan',
                    'Durga Saptashati Path and Devi Stotra recitations',
                    'Daily aarti and offerings to respective goddesses',
                    'Fasting guidance and observance instructions',
                    'Kanya Pujan (girl worship) on Ashtami/Navami',
                    'Prasad distribution and charity recommendations'
                ]
            },
            'durga-pooja': {
                name: 'Durga Pooja',
                description: 'A grand Vedic ritual invoking Goddess Durga to eliminate evil forces, bring divine protection, and ensure victory in life.',
                fullDescription: `Durga Pooja is one of the most powerful and widely celebrated Hindu rituals, dedicated to Goddess Durga—the fierce form of Shakti who destroys evil and protects the righteous. Celebrated especially during the Navratri or Ashwin month, this pooja symbolizes the victory of good over evil and is performed to seek strength, courage, and spiritual upliftment.

The pooja involves rituals like Kalash Sthapana, Durga Saptashati chanting, Homa (fire offerings), and Aarti. Durga is worshipped in her many forms including Mahakali, Mahalakshmi, and Mahasaraswati. These days are filled with devotion, discipline, and rituals to please the Mother Goddess.

It is especially recommended during difficult times in life, for those facing internal struggles, enemies, or health issues, or for those embarking on new beginnings.`,

                image: '/images/services/durga-pooja.webp',
                duration: '1-5 Days (customizable)',
                participants: '10-100+',
                price: '₹10,000 - ₹1,00,000+',
                benefits: [
                    'Destroys negative energies and evil influences',
                    'Grants courage, strength, and confidence',
                    'Ensures spiritual growth and peace of mind',
                    'Removes fear, anxiety, and mental instability',
                    'Blesses with success, prosperity, and protection'
                ],
                includes: [
                    'Kalash Sthapana and Durga Avahan',
                    'Durga Saptashati Path (700 verses)',
                    'Daily pooja and aarti with flowers, sweets, and sindoor',
                    'Navagraha and Rahu-Ketu shanti (if needed)',
                    'Havan with sacred herbs and mantras',
                    'Kanya Pooja and Brahmin bhojan (as per tradition)'
                ]
            },
            'lakshmi-pooja': {
                name: 'Lakshmi Pooja',
                description: 'A sacred Vedic ritual to invoke the blessings of Goddess Lakshmi for wealth, prosperity, and abundance in life and business.',
                fullDescription: `Lakshmi Pooja is performed to worship Goddess Lakshmi, the divine embodiment of wealth, fortune, beauty, and auspiciousness. It is most commonly observed during Diwali, Sharad Purnima, or Fridays, and is ideal for individuals, families, and businesses seeking financial growth and harmony.

The pooja involves invoking Lakshmi with sacred chants, offering lotus flowers, kumkum, rice, sweets, and lighting diyas to invite her into one's home or workplace. The ritual aligns the energy of the space to attract prosperity and removes financial obstacles.

Goddess Lakshmi is also worshipped in her eight forms (Ashta Lakshmi), each representing different facets of abundance—wealth, courage, wisdom, progeny, victory, and more.`,

                image: '/images/services/lakshmi-pooja.jpg',
                duration: '1 Day (1.5-2 Hours)',
                participants: 'Family or Business Team (5-25)',
                price: '₹2,000 - ₹12,000',
                benefits: [
                    'Attracts financial prosperity and material success',
                    'Removes obstacles in wealth and business matters',
                    'Invites peace, joy, and positive energy into the home',
                    'Strengthens savings, income, and fortune',
                    'Brings divine grace and balance in household finances'
                ],
                includes: [
                    'Ganesh and Lakshmi invocation with Sankalp',
                    'Kalash Sthapana and Lakshmi Ashtottara chanting',
                    'Offerings of flowers, sweets, coins, and kumkum',
                    'Lighting of diyas and recitation of Lakshmi Stotra',
                    'Aarti, prasad distribution, and wealth yantra installation',
                    'Spiritual guidance and dosh nivaran (if applicable)'
                ]
            },
            'vishwakarma-pooja': {
                name: 'Vishwakarma Pooja',
                description: 'A ritual dedicated to Lord Vishwakarma, the divine architect, performed to bless tools, machines, and workplaces for success and innovation.',
                fullDescription: `Vishwakarma Pooja is a traditional Vedic ritual performed in honor of Lord Vishwakarma, the celestial engineer and architect of the universe. It is especially significant for engineers, architects, craftsmen, industrial workers, and businesses involving tools and machinery.

This pooja is usually observed on Vishwakarma Jayanti (following Ganesh Chaturthi or in September) and involves the ritualistic worship of instruments, machines, tools, and vehicles to ensure productivity, safety, and divine blessings for creative success.

Lord Vishwakarma is revered as the originator of craftsmanship, innovation, and industry. His blessings are sought for efficiency, quality workmanship, and smooth functioning of all equipment and business operations.`,

                image: '/images/services/vishwakarma-pooja.jpg',
                duration: '1 Day (1.5–3 Hours)',
                participants: '5–50 (workers, staff, family)',
                price: '₹2,500 – ₹15,000',
                benefits: [
                    'Ensures smooth functioning of tools, machines, and systems',
                    'Enhances creativity, innovation, and technical skills',
                    'Prevents accidents and improves workplace safety',
                    'Blessings for success in industrial, construction, or design-related ventures',
                    'Promotes prosperity, teamwork, and growth in business'
                ],
                includes: [
                    'Sankalp and Ganapati invocation',
                    'Lord Vishwakarma idol or yantra installation',
                    'Pooja and chanting with flowers, incense, and tools',
                    'Tool/machine decoration and aarti',
                    'Prasad distribution to workers and staff',
                    'Spiritual guidance and vastu suggestions (optional)'
                ]
            },
            'ganesh-pooja': {
                name: 'Ganesh Pooja',
                description: 'A sacred Vedic ritual to invoke Lord Ganesha’s blessings for wisdom, success, and removal of all obstacles in life’s journey.',
                fullDescription: `Ganesh Pooja is performed to worship Lord Ganesha, the remover of obstacles and the god of wisdom, intellect, and prosperity. It is considered essential before starting any new venture—be it a business, home entry (Griha Pravesh), marriage, or spiritual activity—to ensure success and divine guidance.

Lord Ganesha is invoked through mantras, offerings, and aarti, seeking his grace for a smooth and prosperous path ahead. This pooja is especially popular during Ganesh Chaturthi but can be performed on any auspicious occasion or when facing challenges.

Ganesh Pooja not only removes material obstacles but also clears internal confusion, brings mental peace, and enhances clarity in decision-making.`,

                image: '/images/services/ganesh-pooja.jpeg',
                duration: '1 Day (1–2 Hours)',
                participants: 'Family or Individual (1–25)',
                price: '₹1,500 – ₹8,000',
                benefits: [
                    'Removes obstacles and grants clarity',
                    'Blesses new beginnings and ventures',
                    'Improves focus, intellect, and mental peace',
                    'Protects from negativity and misfortune',
                    'Promotes harmony in home and workplace'
                ],
                includes: [
                    'Sankalp and Ganapati Avahan',
                    'Offerings of durva grass, modaks, flowers, and incense',
                    'Ganesh mantra japa and stotra recitation',
                    'Aarti, prasad distribution, and Ganesh idol/yantra pujan',
                    'Post-pooja guidance for ongoing blessings'
                ]
            },
            'satyanarayan-katha': {
                name: 'Satyanarayan Katha',
                description: 'A sacred storytelling ritual dedicated to Lord Vishnu, performed for peace, prosperity, and fulfillment of wishes.',
                fullDescription: `Satyanarayan Katha is a highly auspicious Hindu ritual that involves the worship of Lord Satyanarayan, a benevolent form of Lord Vishnu. It is performed to express gratitude and seek blessings for peace, prosperity, and success in personal or professional life. The ritual includes a pooja followed by the recitation of the Satyanarayan Katha (story) that emphasizes the importance of truth, devotion, and righteousness.

This pooja is generally performed on full moon (Purnima) days, housewarming (Griha Pravesh), weddings, anniversaries, birthdays, or after fulfilling a vow. It brings spiritual upliftment and blessings for the entire family.

The Katha is simple yet powerful, and can be done at home with the help of a learned priest, bringing harmony, gratitude, and divine favor into one's life.`,

                image: '/images/services/satyanarayan-katha.jpg',
                duration: '1 Day (2–3 Hours)',
                participants: 'Family or Group (5–50)',
                price: '₹2,000 – ₹10,000',
                benefits: [
                    'Brings peace, harmony, and happiness in family life',
                    'Fulfills desires and removes past sins',
                    'Ideal for new beginnings and auspicious events',
                    'Grants wealth, stability, and divine protection',
                    'Improves devotion and connection with Lord Vishnu'
                ],
                includes: [
                    'Sankalp and Ganesh Pooja',
                    'Kalash Sthapana and Lord Satyanarayan worship',
                    'Recitation of all five chapters of the Satyanarayan Katha',
                    'Offerings of Panchamrit, fruits, and sukhdi or sheera (sweet)',
                    'Aarti, prasad distribution, and blessings',
                    'Guidance for monthly or annual observance'
                ]
            }

        }

    };

    const service = serviceDetails[category as keyof typeof serviceData]?.[subcategory as keyof any];

    if (!service) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">Service Not Found</h1>
                    <Link href="/">
                        <Button>Return Home</Button>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50" >
            {/* Header */}
            < header className="bg-gradient-to-r from-orange-600 via-red-600 to-orange-700 text-white sticky top-0 z-50 shadow-lg" >
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-16">
                        <Link href="/" className="flex items-center space-x-2">
                            <div className="text-2xl">🕉️</div>
                            <h1 className="text-xl font-bold">Poojari Ji</h1>
                        </Link>
                        <Link href={`/services/${category}`}>
                            <Button variant="secondary" size="sm">
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Back to Services
                            </Button>
                        </Link>
                    </div>
                </div>
            </header >

            {/* Hero Section */}
            < section className="py-12 bg-gradient-to-r from-orange-600 to-red-600 text-white" >
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold mb-4">{service.name}</h1>
                            <p className="text-xl mb-6 opacity-90">{service.description}</p>
                            <div className="flex flex-wrap items-center gap-4 mb-6">
                                <Badge variant="secondary" className="bg-white/20 text-white">
                                    <Clock className="h-4 w-4 mr-1" />
                                    {service.duration}
                                </Badge>
                                <Badge variant="secondary" className="bg-white/20 text-white">
                                    <Users className="h-4 w-4 mr-1" />
                                    {service.participants}
                                </Badge>
                                <Badge variant="secondary" className="bg-white/20 text-white">
                                    <Star className="h-4 w-4 mr-1" />
                                    Premium Service
                                </Badge>
                            </div>
                            <div className="text-2xl font-bold mb-6">{service.price}</div>
                            <Link href="/booking">
                                <Button size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-gray-100">
                                    <Calendar className="mr-2 h-5 w-5" />
                                    Book Now
                                </Button>
                            </Link>
                        </div>
                        <div className="relative">
                            <img
                                src={service.image}
                                alt={service.name}
                                className="w-full h-96 object-cover rounded-lg shadow-2xl"
                            />
                            <div className="absolute inset-0 bg-black/20 rounded-lg"></div>
                        </div>
                    </div>
                </div>
            </section >

            {/* Main Content */}
            < section className="py-20" >
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-2">
                            <Card className="mb-8">
                                <CardHeader>
                                    <CardTitle className="text-2xl">About This Service</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="prose prose-lg max-w-none text-gray-700">
                                        {service.fullDescription.split('\n\n').map((paragraph, index) => (
                                            <p key={index} className="mb-4 leading-relaxed">
                                                {paragraph.trim()}
                                            </p>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="text-xl flex items-center">
                                            <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
                                            Benefits
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <ul className="space-y-3">
                                            {service.benefits.map((benefit, index) => (
                                                <li key={index} className="flex items-start">
                                                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                                    <span className="text-gray-700">{benefit}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardHeader>
                                        <CardTitle className="text-xl flex items-center">
                                            <Star className="h-5 w-5 mr-2 text-yellow-600" />
                                            What's Included
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <ul className="space-y-3">
                                            {service.includes.map((item, index) => (
                                                <li key={index} className="flex items-start">
                                                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                                    <span className="text-gray-700">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Book This Service</CardTitle>
                                    <CardDescription>
                                        Contact us to schedule your pooja ceremony
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <Link href="/booking">
                                        <Button className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700">
                                            <Calendar className="mr-2 h-4 w-4" />
                                            Book Now
                                        </Button>
                                    </Link>

                                    <div className="border-t pt-4">
                                        <h4 className="font-semibold mb-3">Contact Information</h4>
                                        <div className="space-y-2 text-sm">
                                            <div className="flex items-center">
                                                <Phone className="h-4 w-4 mr-2 text-orange-600" />
                                                <span>+91 9310065609</span>
                                            </div>
                                            <div className="flex items-center">
                                                <Mail className="h-4 w-4 mr-2 text-orange-600" />
                                                <span>info@poojariji.in</span>
                                            </div>
                                            <div className="flex items-center">
                                                <MapPin className="h-4 w-4 mr-2 text-orange-600" />
                                                <span>Punjab, India</span>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Service Details</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Duration:</span>
                                        <span className="font-medium">{service.duration}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Participants:</span>
                                        <span className="font-medium">{service.participants}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Price Range:</span>
                                        <span className="font-medium">{service.price}</span>
                                    </div>
                                    <div className="border-t pt-4">
                                        <div className="text-sm text-gray-600">
                                            * Final pricing depends on specific requirements, location, and additional services
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section >
        </div >
    );
}
