import pt1 from '../images/samsung.png';
import pt2 from '../images/apple.png';
import pt3 from '../images/redmi.png';
import pt4 from '../images/realme.png';
import pt5 from '../images/rolex.png';
import pt6 from '../images/hikvision.png';


const Partners = () => {
    const partners = [
        { 
            id: 11, name: 'Samsung', location: 'Korea', 
            website: 'https://www.samsung.com/bd/', 
            image: pt1 
        },
        { 
            id: 12, name: 'Apple Inc.', location: 'USA', 
            website: 'https://www.apple.com/', 
            image: pt2 
        },
        { 
            id: 13, name: 'Redmi', location: 'Bangladesh', 
            website: 'https://www.mi.com/bd/product-list/', 
            image: pt3 
        },
        { 
            id: 16, name: 'Realme', location: 'Bangladesh', 
            website: 'https://www.realme.com/bd/', 
            image: pt6 
        },
        { 
            id: 14, name: 'Hik-Vision', location: 'UK', 
            website: 'https://www.hikvision.com/en/', 
            image: pt4 
        },
        { 
            id: 15, name: 'Rolex', location: 'Bangladesh', 
            website: 'https://hikvisionbd.net/', 
            image: pt5
        },
    ];

    return (
        <div className="container mx-auto px-4 py-6">
            <h1 className="text-3xl font-bold text-center mb-6">Our Branding Parteners</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                {partners.map((partner) => (
                    <div key={partner.id} className="p-4 border rounded-lg shadow-lg bg-white text-center">
                        <a href={partner.website} target="_blank" rel="noopener noreferrer">
                            <img 
                                src={partner.image} 
                                alt={partner.name} 
                                className="w-24 h-24 mx-auto mb-3 object-contain"
                            />
                        </a>
                        <h2 className="text-xl font-semibold">{partner.name}</h2>
                        <p className="text-gray-600">{partner.location}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Partners;
