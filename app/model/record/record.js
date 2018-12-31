const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecordSchema = new Schema({
    caseNumber: {
        type: String,
        index: true,
        unique: true
    },
    groupName: {
        type: String,
        index: true
    },
    identityName: {
        type: String
    },
    class: {
        type: String
    },
    placeOfRescue: {
        type: String
    },
    zoneName: {
        type: String
    },
    dateAdded: {
        type: Date,
        default: new Date()
    },
    rescueNotes: {
        type: String
    },
    facility: {
        type: String
    },
    dateOfAdmission: {
        type: String
    },
    timeOfAdmission: {
        type: String
    },
    food: {
        type: String
    },
    housing: {
        type: String
    },
    medicalCare: {
        type: String
    },
    proposedResolution: {
        type: String
    },
    otherResolution: {
        type: String
    },
    ageYears: {
        type: String
    },
    ageMonths: {
        type: String
    },
    stage: {
        type: String
    },
    weight: {
        type: String
    },
    length: {
        type: String
    },
    height: {
        type: String
    },
    dateOfExamination: {
        type: String
    },
    modeOfRestraint: {
        type: String
    },
    temperature: {
        type: String
    },
    heartRate: {
        type: String
    },
    pulse: {
        type: String
    },
    resperation: {
        type: String
    },
    observationNotes: {
        type: String
    },
    releaseNotes: {
        type: String
    }
});

const Record = mongoose.model('record', RecordSchema);
module.exports = Record;
