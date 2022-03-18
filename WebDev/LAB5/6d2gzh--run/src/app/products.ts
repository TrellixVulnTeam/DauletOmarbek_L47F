export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
  like: number;
  revome: boolean;
  likebool: boolean;
}

export const products = [
  {
    id: 1,
    imge: 'https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_SL1500_.jpg',
    name: 'Acer Nitro 5',
    price: 1355,
    description: 'Dominate the Game: Great performance meets long battery life with the Intel Core i7-11800H Processor - up to 4.6GHz, 8 cores, 16 threads, 24MB Intel Smart Cache',
    link: 'https://www.amazon.com/Acer-AN515-55-53E5-i5-10300H-GeForce-Keyboard/dp/B092YHJGMN/ref=sr_1_1?crid=3BGOUPQI4SZL2&keywords=Acer+Nitro+5&qid=1647096187&sprefix=acer+nitro+5%2Caps%2C389&sr=8-1',
    category: 'Computers_tablets',
    like: 234,
    revome: true,
    likebool: false,
  },
  {
    id: 2,
    imge: 'https://m.media-amazon.com/images/I/415G0bg-hiL._AC_SL1000_.jpg',
    name: 'Samsung Galaxy Tab S6 Lite 10.4',
    price: 300,
    description: 'S PEN INCLUDED: The included S Pen makes it easier than ever to write notes and personalize photos and videos, all without needing to charge. The S Pen attaches magnetically right to your tablet and is always ready to go.',
    link: 'https://www.amazon.com/Samsung-Galaxy-Lite-Tablet-Angora/dp/B086Z3S3MY/ref=sr_1_3?crid=Y2TTRFYKGRDB&keywords=Samsung+Galaxy+Tab+S6+Lite+10.4&qid=1647096238&sprefix=samsung+galaxy+tab+s6+lite+10.4%2Caps%2C260&sr=8-3',
    category: 'Computers_tablets',
    like: 324,
    revome: true,
    likebool: false,
  },
  {
    id: 3,
    imge: 'https://m.media-amazon.com/images/I/91UsHjAPTlL._AC_SL1500_.jpg',
    name: 'SAMSUNG 32-inch Class LED Smart FHD TV 1080P',
    price: 299,
    description: '',
    link: 'https://www.amazon.com/Samsung-Electronics-UN32N5300AFXZA-1080p-Smart/dp/B07CL4GLQW/ref=sr_1_3?crid=29FU1SIIQC1Y6&keywords=SAMSUNG+32-inch+Class+LED+Smart+FHD+TV+1080P&qid=1647096291&sprefix=samsung+32-inch+class+led+smart+fhd+tv+1080p%2Caps%2C251&sr=8-3',
    category: 'Televisions',
    like: 456,
    revome: true,
    likebool: false,
  },
  {
    id: 4,
    imge: 'https://m.media-amazon.com/images/I/71zZiQGzc5L._AC_SL1500_.jpg',
    name: 'Lenovo Flex 5 Laptop, 14.0" FHD Touch Display',
    price: 619,
    description: 'Powered by an AMD Ryzen 5 5500U mobile processor with Radeon graphics, this portable notebook computer has 16GB DDR4 RAM and 256GB NVMe SSD Storage',
    link: 'https://www.amazon.com/Lenovo-Processor-Graphics-82HU00JWUS-Graphite/dp/B09BG96KFJ/ref=sr_1_5?qid=1647173842&s=computers-intl-ship&sr=1-5&th=1://www.amazon.com/Epson-3-Chip-Projector-Brightness-Speaker/dp/B08L7KHB5J/ref=sr_1_3?crid=8GQPMRT4LFPU&keywords=Epson+VS260+3-Chip+3LCD+XGA+Projector&qid=1647096335&sprefix=epson+vs260+3-chip+3lcd+xga+projector%2Caps%2C248&sr=8-3',
    category: 'Computers_tablets',
    like: 234,
    revome: true,
    likebool: false,
  },
  {
    id: 5,
    imge: 'https://m.media-amazon.com/images/I/71nz3cIcFOL._AC_SL1500_.jpg',
    name: 'Acer Predator Helios 300 PH315-54-760S Gaming Laptop',
    price: 1270,
    description: 'Extreme Performance: Crush the competition with the impressive power and speed of the 11th Generation Intel Core i7-11800H processor, featuring 8 cores and 16 threads to divide and conquer any task or run your most intensive games',
    link: 'https://www.amazon.com/Acer-Predator-PH315-54-760S-i7-11800H-Keyboard/dp/B092YHJLS6/ref=sr_1_10?qid=1647173967&s=computers-intl-ship&sr=1-10',
    category: 'Computers_tablets',
    like: 789,
    revome: true,
    likebool: false,
  },
  {
    id: 6,
    imge: 'https://m.media-amazon.com/images/I/719p0eyZiSL._AC_SL1500_.jpg',
    name: 'SAMSUNG Galaxy Buds Pro',
    price: 117,
    description: 'Intelligent Active Noise Cancellation: Escape and tune in to your own moment of Zen — all with a single tap; Answer calls and instantly switch to talking with voice detection and let in the sounds that matter most with 4 ambient levels',
    link: 'https://www.amazon.com/Bluetooth-Wireless-Cancelling-Charging-Resistant/dp/B08MWZHHKP/ref=sr_1_3?crid=1RKWRXIHSIBFJ&keywords=SAMSUNG+Galaxy+Buds+Pro&qid=1647096413&sprefix=samsung+galaxy+buds+pro%2Caps%2C250&sr=8-3',
    category: 'Headphones',
    like: 678,
    revome: true,
    likebool: false,
  },
  {
    id: 7,
    imge: 'https://m.media-amazon.com/images/I/71FuI8YvCNL._AC_SL1500_.jpg',
    name: 'Apple iPhone 12 Pro Max, 256GB',
    price: 500,
    description: 'Unlocked and compatible with any carrier of choice on GSM and CDMA networks (e.g. AT&T, T-Mobile, Sprint, Verizon, US Cellular, Cricket, Metro, Tracfone, Mint Mobile, etc.).',
    link: 'https://www.amazon.com/Apple-iPhone-12-Pro-Max/dp/B09JFFG8D7/ref=sr_1_1?crid=2JABPDY281PH1&keywords=Apple+iPhone+12+Pro+Max%2C+256GB&qid=1647096440&sprefix=apple+iphone+12+pro+max%2C+256gb%2Caps%2C247&sr=8-1',
    category: 'Phones',
    like: 230,
    revome: true,
    likebool: false,
  },
  {
    id: 8,
    imge: 'https://m.media-amazon.com/images/I/61fEy55xUeL._AC_SL1500_.jpg',
    name: 'SAMSUNG Galaxy Z Flip 3 5G',
    price: 700,
    description: 'Flex Your Best Angle: With Flex Mode, Just Unfold Your Mobile Phone’S Screen To Your Best Angle For Hands-Free Pics And Video Calls; Choose What You Want To Capture, Set It Down, Stand Back And Shoot Your Best Shot',
    link: 'https://www.amazon.com/SAMSUNG-Unlocked-Smartphone-Intuitive-Warranty/dp/B097CMVWN9/ref=sr_1_3?crid=2G2JDBM8710O9&keywords=SAMSUNG+Galaxy+Z+Flip+3+5G&qid=1647096469&sprefix=samsung+galaxy+z+flip+3+5g%2Caps%2C564&sr=8-3',
    category: 'Phones',
    like: 3456,
    revome: true,
    likebool: false,
  },
  {
    id: 9,
    imge: 'https://m.media-amazon.com/images/I/61yjoRgptdL._AC_SL1500_.jpg',
    name: 'JBL Tune 510BT',
    price: 45,
    description: 'The Tune 510BT wireless headphones feature renowned JBL Pure Bass sound, which can be found in the most famous venues all around the world.',
    link: 'https://www.amazon.com/JBL-Tune-710BT-Wireless-Headphones/dp/B095QN9WHH/ref=sr_1_6?crid=DOXFN36MTSAI&keywords=JBL+Tune+510BT&qid=1647096496&sprefix=jbl+tune+510bt%2Caps%2C250&sr=8-6',
    category: 'Headphones',
    like: 267,
    revome: true,
    likebool: false,
  },
  {
    id: 10,
    imge: 'https://m.media-amazon.com/images/I/71trhuzbhML._AC_SL1500_.jpg',
    name: 'HP VH240a 23.8-Inch Full HD',
    price: 220,
    description: 'RESOLUTION & PANEL — 23.8-inch Full HD monitor (1920 x 1080p at 60 Hz) with 16:9 aspect ratio and an anti-glare matte IPS LED-backlit panel (2 million pixels, 16.7 million colors)',
    link: 'https://www.amazon.com/HP-23-8-inch-Adjustment-Speakers-VH240a/dp/B072M34RQC/ref=sr_1_1?crid=1BAXTEVOQZ8MM&keywords=HP+VH240a+23.8-Inch+Full+HD&qid=1647096540&sprefix=hp+vh240a+23.8-inch+full+hd%2Caps%2C249&sr=8-1',
    category: 'Televisions',
    like: 787,
    revome: true,
    likebool: false,
  },
  {
    id: 11,
    imge: 'https://m.media-amazon.com/images/I/91wYB53Y4aL._AC_SL1500_.jpg',
    name: '2017 Apple MacBook Air',
    price: 358,
    description: 'Renewed products look and work like new. These pre-owned products have been inspected and tested by Amazon-qualified suppliers, which typically perform a full diagnostic test, replacement of any defective parts, and a thorough cleaning process. Packaging and accessories may be generic. All products on Amazon Renewed come with a minimum 90-day supplier-backed warranty.',
    link: 'https://www.amazon.com/Apple-MacBook-Processor-MQD32LL-Version/dp/B078H42W49/ref=sr_1_29?qid=1647173967&s=computers-intl-ship&sr=1-29',
    category: 'Computers_tablets',
    like: 234,
    revome: true,
    likebool: false,
  },
  {
    id: 12,
    imge: 'https://m.media-amazon.com/images/I/81Ulnpn3ZpL._AC_SL1500_.jpg',
    name: 'Samsung Galaxy S22',
    price: 1200,
    description: '8K SUPER STEADY VIDEO: Shoot videos that rival how epic your life is with stunning 8K recording, the highest recording resolution available on a smartphone; Video captured is effortlessly smooth, thanks to Auto Focus Video Stabilization on Galaxy S22*',
    link: 'https://www.amazon.com/Samsung-Smartphone-Unlocked-Brightest-Processor/dp/B09MVYRBF6/ref=sr_1_2?qid=1647174220&rnid=2811119011&s=electronics&sr=1-2&th=1',
    category: 'Phones',
    like: 786,
    revome: true,
    likebool: false,
  },
  {
    id: 13,
    imge: 'https://m.media-amazon.com/images/I/61smwbhzBML._AC_SL1500_.jpg',
    name: 'OnePlus 9 Pro Morning Mist',
    price: 1000,
    description: 'Hasselblad Camera for Mobile - Take your best shot with the OnePlus 9 Pro 5G’s Quad Camera system co-developed by Hasselblad, featuring a 48MP main camera, 50MP Ultra-Wide camera, 8MP telephoto camera, and 2MP monochrome lens',
    link: 'https://www.amazon.com/OnePlus-Unlocked-Smartphone-Hasselblad-Wireless/dp/B07XM7WVS8/ref=sr_1_16?qid=1647174220&rnid=2811119011&s=electronics&sr=1-16&th=1',
    category: 'Phones',
    like: 234,
    revome: true,
    likebool: false,
  },
  {
    id: 14,
    imge: 'https://m.media-amazon.com/images/I/71MFE2UY6-L._AC_SL1500_.jpg',
    name: 'Samsung Electronics Galaxy Z Fold 3 5G',
    price: 2000,
    description: '120Hz AMOLED 2X Screen: Everything looks brilliant on this big, beautiful, clear display, offering a mesmerizing and dynamic viewing experience',
    link: 'https://www.amazon.com/Samsung-Electronics-Unlocked-Smartphone-Foldable/dp/B097CNBDX2/ref=sr_1_24?qid=1647174220&rnid=2811119011&s=electronics&sr=1-24&th=1',
    category: 'Phones',
    like: 345,
    revome: true,
    likebool: false,
  },
  {
    id: 15,
    imge: 'https://m.media-amazon.com/images/I/91mU5X90piL._AC_SL1500_.jpg',
    name: 'Hisense 32-Inch Class H55',
    price: 219,
    description: 'Combining sharp 720p picture quality, the voice-enabled android TV platform, built-in Wi-Fi, and innovative technologies, Hisense H55 series smart TVs are great for all your needs - streaming, cable, satellite, gaming, and free over-the-air TV.',
    link: 'https://www.amazon.com/Hisense-32-Inch-Android-Remote-32H5500G/dp/B08GQHX28C/ref=sr_1_17?qid=1647174613&rnid=1266092011&s=electronics&sr=1-17&th=1',
    category: 'Televisions',
    like: 678,
    revome: true,
    likebool: false,
  },
  {
    id: 16,
    imge: 'https://m.media-amazon.com/images/I/51NKhnjhpGL._AC_SL1024_.jpg',
    name: 'SAMSUNG QN32Q50RAFXZA Flat 32',
    price: 499,
    description: '4K UHD Processor: a powerful processor optimizes your tv’ s performance with 4K picture quality',
    link: 'https://www.amazon.com/SAMSUNG-QN32Q50RAFXZA-32Q50-Smart-TV2019/dp/B07W5QYD2K/ref=sr_1_9?qid=1647174818&refinements=p_89%3ASAMSUNG&rnid=2528832011&s=electronics&sr=1-9',
    category: 'Televisions',
    like: 58,
    revome: true,
    likebool: false,
  },
  {
    id: 17,
    imge: 'https://m.media-amazon.com/images/I/7170n5MDeHS._AC_SL1000_.jpg',
    name: 'LG 32LM577BPUA 32 Inch LED',
    price: 359,
    description: 'LG USA AUTHORIZED - Includes 2 Year Extended Protection Plan in ADDITION to the Included FULL Manufacturer Protection',
    link: 'https://www.amazon.com/LG-32LM577BPUA-Premium-Extended-Protection/dp/B099GQT66Y/ref=sr_1_6?qid=1647174899&refinements=p_89%3ALG&rnid=2528832011&s=electronics&sr=1-6',
    category: 'Televisions',
    like: 234,
    revome: true,
    likebool: false,
  },
  {
    id: 18,
    imge: 'https://m.media-amazon.com/images/I/61f6S+WtUKL._AC_SL1500_.jpg',
    name: 'JBL Tune 510BT',
    price: 49.95,
    description: 'The Tune 510BT wireless headphones feature renowned JBL Pure Bass sound, which can be found in the most famous venues all around the world.',
    link: 'https://www.amazon.com/JBL-Tune-510BT-Ear-Headphones/dp/B08WM1V5P1/ref=sr_1_29?qid=1647175117&s=electronics&sr=1-29&th=1',
    category: 'Headphones',
    like: 345,
    revome: true,
    likebool: false,
  },
  {
    id: 19,
    imge: 'https://m.media-amazon.com/images/I/715Sv8XftgL._AC_SL1500_.jpg',
    name: 'Kids Headphones',
    price: 16.99,
    description: 'On-ear headphones has padded soft cushions with a soft touch finish. Adjustable headband for a perfect fit, and a lightweight design for kids age 3 and up. Foldable design for a more compact and easy storage. The cord is a 5 feet long nylon braided cable. Designed for kids, girls, boys, children, toddlers, home/online school, training.',
    link: 'https://www.amazon.com/Kids-Headphones-products-Tangle-Free-Ear/dp/B0746RBK2M/ref=sr_1_24?qid=1647175218&s=electronics&sr=1-24&th=1',
    category: 'Headphones',
    like: 234,
    revome: true,
    likebool: false,
  },
  {
    id: 20,
    imge: 'https://m.media-amazon.com/images/I/51sCVB0IZDL._AC_SL1500_.jpg',
    name: 'Sony Noise Cancelling Headphones',
    price: 54,
    description: 'Cancel out the world with smart noise cancellation',
    link: 'https://www.amazon.com/Sony-Noise-Cancelling-Headphones-WHCH710N/dp/B085RNVJ3P/ref=sr_1_19?qid=1647175323&rnid=2528832011&s=electronics&sr=1-19&th=1',
    category: 'Headphones',
    like: 154,
    revome: true,
    likebool: false,
  },
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/