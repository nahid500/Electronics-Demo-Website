import pt1 from '../images/pt1.jpeg';
import pt2 from '../images/pt2.jpeg';
import pt3 from '../images/pt3.png';
import pt4 from '../images/pt4.jpeg';
import pt5 from '../images/pt5.jpeg';
import pt6 from '../images/pt6.png';
import pt7 from '../images/pt7.png';
import pt8 from '../images/pt8.jpeg';
import pt9 from '../images/pt9.jpeg';

const Partners = () => {
    const partners = [
        { 
            id: 11, name: 'Sonali Bank', location: 'Bangladesh', 
            website: 'https://www.sonalibank.com.bd', 
            image: pt1 
        },
        { 
            id: 12, name: 'Dutch-Bangla Bank', location: 'Bangladesh', 
            website: 'https://www.dutchbanglabank.com', 
            image: pt2 
        },
        { 
            id: 13, name: 'BRAC Bank', location: 'Bangladesh', 
            website: 'https://www.bracbank.com', 
            image: pt3 
        },
        { 
            id: 14, name: 'Islami Bank Bangladesh', location: 'Bangladesh', 
            website: 'https://www.islamibankbd.com', 
            image: pt4 
        },
        { 
            id: 15, name: 'Prime Bank', location: 'Bangladesh', 
            website: 'https://www.primebank.com.bd', 
            image: pt5
        },
        { 
            id: 16, name: 'United Commercial Bank', location: 'Bangladesh', 
            website: 'https://www.ucb.com.bd', 
            image: pt6 
        },
        { 
            id: 17, name: 'Eastern Bank', location: 'Bangladesh', 
            website: 'https://www.ebl.com.bd', 
            image: pt7
        },
        { 
            id: 18, name: 'City Bank', location: 'Bangladesh', 
            website: 'https://www.thecitybank.com', 
            image: pt8 
        },
        { 
            id: 19, name: 'Standard Chartered Bangladesh', location: 'Bangladesh', 
            website: 'https://www.sc.com/bd', 
            image: pt9
        },
    ];

    return (
        <div className="container mx-auto px-4 py-6">
            <h1 className="text-3xl font-bold text-center mb-6">Our Banking Partners</h1>
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
