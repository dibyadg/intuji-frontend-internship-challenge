import React from 'react';
import Image from 'next/image';

import Logo1 from "../../public/images/openzep.png";
import Logo2 from "../../public/images/oracle.png";
import Logo3 from "../../public/images/morpheus.png";
import Logo4 from "../../public/images/samsung.png";
import Logo5 from "../../public/images/monday.png";
import Logo6 from "../../public/images/segment.png";
import Logo7 from "../../public/images/protonet.png";

const Companies = () => {
    const companyLogos = [
        Logo1,
        Logo2,
        Logo3,
        Logo4,
        Logo5,
        Logo6,
        Logo7
    ];

    return (
        <div className="text-center py-12 bg-[#F5F6F8]">
            <h1 className="mb-8">Over 32k+ software businesses growing with AR Shakir.</h1>
            <div className="flex justify-center">
                {companyLogos.map((logo, index) => (
                    <div key={index} className="mx-4">
                        <Image src={logo} alt={`logo-${index}`} height={150} width={150} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Companies;
