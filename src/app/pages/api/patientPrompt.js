// Purpose: create a prompt to be sent into the cohere classify api

// make const string variables with the responsees to the strings above

// patient information
const patientName = "";
const patientDOB = "";
const patientGender = "";
const patientAddress = "";
const patientCity = "";
const patientState = "";
const patientZip = "";
const patientHomePhone = "";
const patientCellPhone = "";
const patientEmail = "";

// // emergency contact
// const emergencyContactName = "";
// const emergencyContactRelationship = "";
// const emergencyContactHomePhone = "";
// const emergencyContactCellPhone = "";

// medical history
const allergies = "";
const currentMedications = "";
const pastSurgicalHistory = "";
const chronicConditions = "";
const primaryCarePhysician = "";
const pharmacyName = "";
const pharmacyLocation = "";

// presenting complaint
const reasonForVisit = "";

// symptoms
const symptoms = "";

// recent events
const recentInjuries = "";
const recentIllnesses = "";

// social history
const socialHistory = [];

// pregnancy status
const pregnancyStatus = "";

const patientPrompt = ``;

// create a class for the patient
class Patient {
  constructor(
    patientName,
    patientDOB,
    patientGender,
    patientAddress,
    patientCity,
    patientState,
    patientZip,
    patientHomePhone,
    patientCellPhone,
    patientEmail,
    emergencyContactName,
    emergencyContactRelationship,
    emergencyContactHomePhone,
    emergencyContactCellPhone,
    allergies,
    currentMedications,
    pastSurgicalHistory,
    chronicConditions,
    primaryCarePhysician,
    pharmacyName,
    pharmacyLocation,
    reasonForVisit,
    symptoms,
    recentInjuries,
    recentIllnesses,
    socialHistory,
    pregnancyStatus
  ) {
    this.patientName = patientName;
    this.patientDOB = patientDOB;
    this.patientGender = patientGender;
    this.patientAddress = patientAddress;
    this.patientCity = patientCity;
    this.patientState = patientState;
    this.patientZip = patientZip;
    this.patientHomePhone = patientHomePhone;
    this.patientCellPhone = patientCellPhone;
    this.patientEmail = patientEmail;
    this.emergencyContactName = emergencyContactName;
    this.emergencyContactRelationship = emergencyContactRelationship;
    this.emergencyContactHomePhone = emergencyContactHomePhone;
    this.emergencyContactCellPhone = emergencyContactCellPhone;
    this.allergies = allergies;
    this.currentMedications = currentMedications;
    this.pastSurgicalHistory = pastSurgicalHistory;
    this.chronicConditions = chronicConditions;
    this.primaryCarePhysician = primaryCarePhysician;
    this.pharmacyName = pharmacyName;
    this.pharmacyLocation = pharmacyLocation;
    this.reasonForVisit = reasonForVisit;
    this.symptoms = symptoms;
    this.recentInjuries = recentInjuries;
    this.recentIllnesses = recentIllnesses;
    this.socialHistory = socialHistory;
    this.pregnancyStatus = pregnancyStatus;
  }
  
    // create a prompt to be given to chatgpt
    // this will be a string that will be sent to the chatgpt api
    // the chatgpt api will then return a string that will be sent to the user
    // the user will then be prompted to answer the question
    patientPrompt() {
        const patientPrompt = `
        Patient Information:\n
        Full Name: ${this.patientName}\n
        DOB: ${this.patientDOB}\n
        Gender: ${this.patientGender}\n
        Address: ${this.patientAddress}\n
        City: ${this.patientCity}\n
        State: ${this.patientState}\n
        Zip: ${this.patientZip}\n
        Phone: ${this.patientHomePhone}\n
        Email: ${this.patientEmail}\n
        Allergies: ${this.allergies}\n
        Current Medications: ${this.currentMedications}\n
        Past Surgical History: ${this.pastSurgicalHistory}\n
        Chronic Conditions: ${this.chronicConditions}\n
        Reason for Visit: ${this.reasonForVisit}\n
        Symptoms: ${this.symptoms}\n
        Recent Injuries: ${this.recentInjuries}\n
        Recent Illnesses: ${this.recentIllnesses}\n
        Social History: ${this.socialHistory.join(", ")}\n
        Pregnancy Status: ${this.pregnancyStatus}\n`;

        return patientPrompt;
    }
}