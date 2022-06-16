/* eslint-disable import/no-unresolved */
/* eslint-disable max-len */
/* eslint-disable jsdoc/require-jsdoc */
import type { Faq } from "$lib/types/components";

const whatIsImpact = `
- TLIP enables a transparent, efficient and cost-effective way of managing trade information across borders. It allows for trade processes to become paperless and fully digital.
- TLIP will create trust and visibility along the trade supply chains as actors can securely exchange information in a digital format.
- TLIP supports WTO’s Trade Facilitation Agreement and the ambition to make cross-border trade processes more efficient-both in terms of saved time and cost.
- The impact of TLIP is to make East African exports more competitive through building efficiencies around information generation, transmission and storage. TLIP will link the East African trading community to the global trade supply chain in a way that gives the region and its trading partners access to the critical information required to make informed decisions well in advance of the arrival of physical goods.
`;

const whyWasInitiated = `
- International trade is an information-intensive process, involving hundreds of data points and multiple information exchanges between traders, transporters and border authorities. Most information exchanged throughout the journey of a single product is paper-based, making it unsustainable, expensive, slow, error-prone and inefficient. The TLIP project was initiated to tackle problems associated with paper-based information sharing and to increase the transparency, efficiency and sustainability of international trade.
- TLIP’s vision is to enhance the international competitiveness of all East African traders by digitizing and covering the end-to-end trade-data journey to save time, cost, errors and lost documents.
`;

const howIsOrganized = `
- TLIP was initiated by TradeMark East Africa and the initial stages of development and implementation are done by a team consisting of experts from TradeMark East Africa and the IOTA Foundation.
- As the TLIP moves from testing and learning into production, the aim is to anchor the project with relevant government bodies in the target countries such as Uganda, Kenya, Rwanda and Tanzania for the first phase.
- A Technical Working Group, representing both public and private entities, has been established to oversee and provide feedback during the project.
`;

const howWillGrow = `
- TLIP is currently being tested for selected tradelanes and commodities such as flowers, fish, tea and textiles As new tradelanes and commodities are added, TLIP will partner with the relevant government agencies, trade associations and traders to build out new features.
- We plan to pilot TLIP across Kenya, Uganda, Rwanda and Tanzania to establish integrations with relevant border agencies for secure data exchange. Furthermore, different destination markets will be involved in accepting digital certificates for the commodities involved in TLIP.
- Further, TLIP has been selected by the UK Border Innovation Team under Cabinet Office for pilots on export/import with the UK during 202-
- The aim is to establish TLIP as the public system, starting in the East African Community and the UK, for the exchange of trade data and certificates. Piloting across different trade lanes and commodities enables a robust system to be built that over time can cover all trade lanes and commodities.
`;

const whoOwns = `
- Currently TLIP is anchored as an innovation project under TradeMark East Africa.
- TLIP will become a public infrastructure for government agencies to exchange information with both foreign customs authorities and with traders, transporters and other private actors. As the system transitions into production mode, relevant government institutions will host the system to ensure it is compliant with national legislation and public service principles.
`;

const whoUses = `
- Once TLIP is in full production, it is available to anybody who needs to share trade information to ensure goods get from A to B. This involves traders from various industries, border authorities, transporters and freight providers.
- Currently, TLIP is in testing and pilot stage, with the goal of building the right integrations with border agencies in East Africa, ensuring a high quality user experience and delivering the envisioned impact.
- A number of tradelanes/commodities have been preselected for the testing phase including Flowers, Fish, Tea, Rice, Livestock, Seeds and Textiles - more will likely follow.
`;

const whyUsesIOTA = `
- The TLIP project uses the IOTA DLT because it is highly scalable, energy-efficient and does not require the use of a cryptocurrency. IOTA is an open-source technology so that TLIP can be developed, maintained and serviced by any skillful technology consultancy.
- TradeMark East Africa has partnered with the IOTA Foundation in order to establish TLIP. The IOTA Foundation is a not-for-profit organisation registered in Germany that is paid on a consultancy-based fee structure to support building TLIP.
`;

const whyIsDLTImportant = `
- DLT (such as blockchain) is a technology that can ensure the immutability and integrity of digital data. It performs the same function as a government stamp on a trade certificate. Digital certificates shared using DLT can be trusted to be authentic and cannot be tampered with at a later stage. DLT provides the security and auditability of trade certification to be shared through the TLIP system alone. For example, customs in destination markets will not need a stamped physical Certificate of Origin when using TLIP.
- Furthermore, DLT enables parties to interact securely online without requiring a centralised platform that stores all information and is vulnerable to hacking or manipulation.
`;

const whatCostToUse = `
- Currently TLIP is in an innovation project and any costs associated with testing and using the system are covered by participating donor organizations.
- Potential future fees for using TLIP will be decided on by the relevant government agencies in each participating country.
- The total cost of trade is expected to decline as TLIP becomes the standard for cross-border trade processes.
`;

const investNewTechnology = `
- Private actors such as traders, forwarders and transporters can access TLIP via a normal browser on both PCs and mobile devices, using their secure login credentials. As such, no new investments are required. 
- Government agencies participating in the TLIP network can share information through either a set of standard APIs or by establishing a tailored “TLIP bridge” that communicates with their internal systems and databases. Furthermore, government agencies are expected to run DLT nodes to ensure the data integrity that provides trust to the system and the information shared across it. Some establishment costs are to be expected and financial support is leveraged through TradeMark East Africa and participating donor countries.
- Large corporations can also opt to use open APIs for integrating with their internal systems and thus ensure more automated workflows. Our long-term vision is to establish standard setup processes to connect with relevant ERP systems.
`;

export const FAQS: Faq = {
    "sections": [
        {
            "id": "Purpose",
            "title": "Purpose",
            "subsections": [
                {
                    "id": "what-is",
                    "title": "What is TLIP?",
                    "description": "TLIP is a digital system that enables the secure storing and sharing of trade-related information. TLIP is both i) a set of secure connections to border agencies’ databases; and ii) a user-friendly dashboard, which can be accessed via a secure login from PCs and mobile devices. The backend connections are automated to allow border agencies to share information without introducing new work processes. The front end allows all actors (agencies, traders, transporters, etc.) to upload typical trade documentation such as the Certificate of Origin, the Phytosanitary Certificate, Packing List or Commercial Invoice. Once uploaded, documents are protected against loss and forgery, and can be easily shared with relevant parties. "
                }, {
                    "id": "what-is-impact",
                    "title": "What is the impact of TLIP?",
                    "description": whatIsImpact
                }
            ]
        },
        {
            "id": "Roadmap",
            "title": "Roadmap",
            "subsections": [
                {
                    "id": "why-was-initiated",
                    "title": "Why was TLIP initiated?",
                    "description": whyWasInitiated
                },
                {
                    "id": "how-is-organized",
                    "title": "How is the TLIP project organized?",
                    "description": howIsOrganized
                },
                {
                    "id": "how-will-grow",
                    "title": "How will TLIP grow in the next 18 months?",
                    "description": howWillGrow
                }
            ]
        },
        {
            "id": "Governance",
            "title": "Governance",
            "subsections": [
                {
                    "id": "who-owns",
                    "title": "Who owns TLIP?",
                    "description": whoOwns
                },
                {
                    "id": "who-uses",
                    "title": "Who uses TLIP?",
                    "description": whoUses
                }
            ]
        },
        {
            "id": "Technology",
            "title": "Technology",
            "subsections": [
                {
                    "id": "why-uses-IOTA",
                    "title": "Why does TLIP use a DLT called IOTA?",
                    "description": whyUsesIOTA
                },
                {
                    "id": "why-is-DLT-important",
                    "title": "Why is Distributed Ledger Technology (DLT) important for TLIP?",
                    "description": whyIsDLTImportant
                }
            ]
        },
        {
            "id": "Finance",
            "title": "Finance",
            "subsections": [
                {
                    "id": "what-cost-to-use",
                    "title": "What does it cost to use TLIP?",
                    "description": whatCostToUse
                },
                {
                    "id": "how-TLIP-funded",
                    "title": "How is the TLIP project funded?",
                    "description": "Development of the project is made possible by the generous support of the development agencies of the following governments: the Netherlands, the United Kingdom and the United States of America."
                }, {
                    "id": "invest-new-technology",
                    "title": "Will TLIP require users to invest in new technology?",
                    "description": investNewTechnology
                }
            ]
        }
    ]
};
