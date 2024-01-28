// pages/api/classifier.js

/*
The Canadian Triage and Acuity Scale (CTAS) is a tool used across the country 
and internationally to ensure patients are triaged fairly and consistently in 
the same way at every hospital. There are five triage levels, Level 1 being 
the most critical and Level 5 being non-urgent.

Level 1 – Critical — obviously life threatening
Conditions requiring resuscitation, including cardiac arrest, shock and major trauma

Level 2 – Emergent — potential threat to life or limb
Examples include asthma flare-up when medicine isn’t working, altered mental state, 
chest pain that suggests heart problems

Level 3 – Urgent — a condition or serious problem requiring emergency intervention
Examples include abdominal pain, mild dehydration, kidney stone or shortness of breath

Level 4 – Less Urgent — conditions which because of distress or potential for 
complications would benefit from intervention
Examples include vomiting and diarrhea with no dehydration, bladder infections, 
lacerations and earaches

Level 5 – Non Urgent — conditions which are non-urgent and/or which might be part of a chronic problem
Examples include sore throat and insect bites
\
*/
const { CohereClient } = require("cohere-ai");

const cohere = new CohereClient({
    token: process.env.COHERE_API_KEY, // Use an environment variable for the API key
});


async function classifyText(inputPrompt) {
    const classify = await cohere.classify({
        examples: [
            // Level 1 – Critical — obviously life threatening
            // Conditions requiring resuscitation, including cardiac arrest, 
            // shock and major trauma
            { text: `
            Full Name: John Doe
            DOB: January 15, 1980
            Gender: Male
            Address: 123 Main Street
            City: Anytown
            State: Provinceville
            Zip: A1B 2C3
            Phone: (555) 123-4567
            Email: john.doe@email.com
            Allergies: None
            Current Medications: Ibuprofen 200mg, Aspirin 81mg
            Past Surgical History: Appendectomy in 2005
            Chronic Conditions: Hypertension
            Reason for Visit: Severe headache and dizziness
            Symptoms: Throbbing pain on the right side of the head, nausea, sensitivity to light and sound, dizziness
            Recent Injuries: None
            Recent Illnesses: Common cold two weeks ago
            Social History: Non-smoker, occasional alcohol use
            Pregnancy Status: Not applicable 
            `, 
            label: "Level 1" },
            { text: `
            Full Name: Emily Smith
            DOB: March 22, 1995
            Gender: Female
            Address: 456 Oak Avenue
            City: Smallville
            State: Countryside
            Zip: X0Y 4Z5
            Phone: (555) 987-6543
            Email: emily.smith@email.com
            Allergies: Penicillin
            Current Medications: Birth control pills
            Past Surgical History: None
            Chronic Conditions: Asthma
            Reason for Visit: Difficulty breathing and chest tightness
            Symptoms: Shortness of breath, wheezing, chest tightness, coughing
            Recent Injuries: None
            Recent Illnesses: None
            Social History: Non-smoker, occasional recreational drug use
            Pregnancy Status: Not pregnant
            `, 
            label: "Level 1" },
            { text: `
            Full Name: Michael Johnson
            DOB: September 5, 1985
            Gender: Male
            Address: 567 Maple Lane
            City: Riverside
            State: Valleyview
            Zip: V8W 1X0
            Phone: (555) 789-0123
            Email: michael.j@email.com
            Allergies: None
            Current Medications: None
            Past Surgical History: None
            Chronic Conditions: None
            Reason for Visit: Severe abdominal pain
            Symptoms: Sharp pain in the lower abdomen, nausea, vomiting
            Recent Injuries: None
            Recent Illnesses: None
            Social History: Non-smoker, occasional alcohol use
            Pregnancy Status: Not applicable
            `, 
            label: "Level 1" },
            { text: `
            Full Name: Joseph Kim
            DOB: March 15, 1980
            Gender: Male
            Address: 234 Maple Street, Vancouver, BC
            City: Vancouver
            State: BC
            Zip: V5Y 2T2
            Phone: 678-780-3091
            Email: joseph.kim@example.com
            Allergies: Penicillin, Sulfa Drugs
            Current Medications: Metoprolol
            Past Surgical History: None
            Chronic Conditions: Hypertension
            Reason for Visit: Pain in upper abdomen
            Symptoms: Nausea, vomiting, fever
            Recent Injuries: Fall
            Recent Illnesses: None
            Social History: Smokes 1 pack of cigarettes per day, drinks socially
            Pregnancy Status: Unknown`, 
            label: "Level 1" },
            { text: `
            Full Name: Joseph Kim
            DOB: March 15, 1980
            Gender: Male
            Address: 234 Maple Street, Vancouver, BC
            City: Vancouver
            State: BC
            Zip: V5Y 2T2
            Phone: 678-780-3091
            Email: joseph.kim@example.com
            Allergies: Penicillin, Sulfa Drugs
            Current Medications: Metoprolol
            Past Surgical History: None
            Chronic Conditions: Hypertension
            Reason for Visit: Pain in upper abdomen
            Symptoms: Nausea, vomiting, fever
            Recent Injuries: Fall
            Recent Illnesses: None
            Social History: Smokes 1 pack of cigarettes per day, drinks socially
            Pregnancy Status: Unknown
            `, 
            label: "Level 1" },

            { text: `Full Name: David Anderson
            DOB: March 12, 1980
            Gender: Male
            Address: 456 Elm Street, Montreal, QC
            City: Montreal
            State: QC
            Zip: H8N 2T8
            Phone: 778-887-0838
            Email: david.anderson@example.com
            Allergies: Egg, Wheat
            Current Medications: Fluticasone
            Past Surgical History: Appendectomy
            Chronic Conditions: None
            Reason for Visit: Altered mental state
            Symptoms: Confusion, agitation, diaphoresis
            Recent Injuries: None
            Recent Illnesses: Influenza
            Social History: Smokes 0.5 packs of cigarettes per day, drinks heavily
            Pregnancy Status: Unknown`, 
            label: "Level 2" },
            { text: `Full Name: Michael Wilson
            DOB: March 20, 1985
            Gender: Male
            Address: 9865 Meadow Lane, Calgary, AB
            City: Calgary
            State: AB
            Zip: T2P 1J9
            Phone: 514-788-5202
            Email: michael.wilson@example.com
            Allergies: Latex
            Current Medications: Salbutamol
            Past Surgical History: Appendectomy
            Chronic Conditions: Asthma, Diabetes Mellitus
            Reason for Visit: Chest pain
            Symptoms: Chest pain, shortness of breath, coughing
            Recent Injuries: None
            Recent Illnesses: Upper Respiratory Infection
            Social History: Smoker, heavy alcohol consumption
            Pregnancy Status: Unknown`, 
            label: "Level 2" },
            { text: `Full Name: Sophia Rodriguez
            DOB: November 10, 1995
            Gender: Female
            Address: 1010 Pine Street, Ottawa, ON
            City: Ottawa
            State: ON
            Zip: K1S 5R2
            Phone: 604-715-3621
            Email: sophia.rodriguez@example.com
            Allergies: Peanut, Tree Nuts
            Current Medications: Fluocinonide
            Past Surgical History: Tonsillectomy, Adenoidectomy
            Chronic Conditions: Atopic Dermatitis
            Reason for Visit: Chest pain
            Symptoms: Chest pain, shortness of breath, coughing
            Recent Injuries: None
            Recent Illnesses: Upper Respiratory Infection
            Social History: Non-smoker, occasional alcohol consumption
            Pregnancy Status: Unknown`, 
            label: "Level 2" },
            { text: `Full Name: Ethan Roberts
            DOB: September 28, 1990
            Gender: Male
            Address: 789 Elm Street, Montreal, QC
            City: Montreal
            State: QC
            Zip: H8N 2T3
            Phone: 403-290-0301
            Email: ethan.roberts@example.com
            Allergies: Egg, Wheat
            Current Medications: Fluticasone
            Past Surgical History: Appendectomy
            Chronic Conditions: None
            Reason for Visit: Altered mental state
            Symptoms: Confusion, agitation, diaphoresis
            Recent Injuries: None
            Recent Illnesses: Influenza
            Social History: Smokes 0.5 packs of cigarettes per day, drinks heavily
            Pregnancy Status: Unknown`, 
            label: "Level 2" },
            { text: `Full Name: Julia Peters
            DOB: June 12, 1985
            Gender: Female
            Address: 456 Oak Street, Toronto, ON
            City: Toronto
            State: ON
            Zip: M6K 2L3
            Phone: 514-788-5201
            Email: julia.peters@example.com
            Allergies: Latex
            Current Medications: Salbutamol
            Past Surgical History: Tonsillectomy
            Chronic Conditions: Asthma
            Reason for Visit: Asthma flare-up
            Symptoms: Shortness of breath, wheezing, chest tightness
            Recent Injuries: None
            Recent Illnesses: Upper Respiratory Infection
            Social History: Non-smoker, occasional alcohol consumption
            Pregnancy Status: Unknown`, 
            label: "Level 2" },

            { text: `Full Name: Jessica Wright
            DOB: January 17, 1995
            Gender: Female
            Address: 345 Maple Street, Vancouver, BC
            City: Vancouver
            State: BC
            Zip: V5Y 2T2
            Phone: 678-780-3092
            Email: jessica.wright@example.com
            Allergies: Latex
            Current Medications: None
            Past Surgical History: Tonsillectomy
            Chronic Conditions: None
            Reason for Visit: Abdominal pain
            Symptoms: Pain in the upper right abdomen, nausea, vomiting
            Recent Injuries: Fall
            Recent Illnesses: None
            Social History: Non-smoker, occasional alcohol consumption
            Pregnancy Status: Unknown
            `, 
            label: "Level 3" },
            { text: `Full Name: Jason Wang
            DOB: March 20, 2000
            Gender: Male
            Address: 1245 Pine Street, Ottawa, ON
            City: Ottawa
            State: ON
            Zip: K1S 5R4
            Phone: 514-788-5200
            Email: jason.wang@example.com
            Allergies: Penicillin, Sulfa Drugs
            Current Medications: Metoprolol
            Past Surgical History: Appendectomy
            Chronic Conditions: Hypertension
            Reason for Visit: Shortness of breath
            Symptoms: Difficulty breathing, wheezing, chest tightness
            Recent Injuries: None
            Recent Illnesses: Upper Respiratory Infection
            Social History: Smoker, heavy alcohol consumption
            Pregnancy Status: Unknown`, 
            label: "Level 3" },
            { text: `Full Name: Julia Peters
            DOB: June 12, 1985
            Gender: Female
            Address: 456 Oak Street, Toronto, ON
            City: Toronto
            State: ON
            Zip: M6K 2L3
            Phone: 514-788-5201
            Email: julia.peters@example.com
            Allergies: Latex
            Current Medications: Salbutamol
            Past Surgical History: Tonsillectomy
            Chronic Conditions: Asthma
            Reason for Visit: Asthma flare-up
            Symptoms: Shortness of breath, wheezing, chest tightness
            Recent Injuries: None
            Recent Illnesses: Upper Respiratory Infection
            Social History: Non-smoker, occasional alcohol consumption
            Pregnancy Status: Unknown`, 
            label: "Level 3" },
            { text: `Full Name: Sarah Anderson
            DOB: August 8, 1990
            Gender: Female
            Address: 678 Elm Street, Montreal, QC
            City: Montreal
            State: QC
            Zip: H8N 2T3
            Phone: 403-290-0301
            Email: sarah.anderson@example.com
            Allergies: Egg, Wheat
            Current Medications: Fluticasone
            Past Surgical History: Appendectomy
            Chronic Conditions: None
            Reason for Visit: Kidney stone
            Symptoms: Pain in the upper right abdomen, nausea, vomiting, blood in urine
            Recent Injuries: Fall
            Recent Illnesses: None
            Social History: Non-smoker, occasional alcohol consumption
            Pregnancy Status: Unknown`, 
            label: "Level 3" },
            { text: ``, 
            label: "Level 3" },

            { text: ``, 
            label: "Level 2" },
            { text: ``, 
            label: "Level 2" },
            { text: ``, 
            label: "Level 2" },
            { text: ``, 
            label: "Level 2" },
            { text: ``, 
            label: "Level 2" },

            { text: ``, 
            label: "Level 2" },
            { text: ``, 
            label: "Level 2" },
            { text: ``, 
            label: "Level 2" },
            { text: ``, 
            label: "Level 2" },
            { text: ``, 
            label: "Level 2" },
        ],
        inputs: [
            inputPrompt,
        ],
    })
    return classify;
  
    console.log(classify);
};