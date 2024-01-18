
import ballerina/http;
import ballerina/io;

// Path to the JSON file
string filePath = "./data/walkin-reservation.json";

service /pms on new http:Listener(8080) {

    resource function get reservations() returns json|error {
        // Read the JSON content from the file
        var fileReadResult = io:fileReadJson(filePath);
        if (fileReadResult is json) {
            return fileReadResult;
        } else {
            return { "error": "File reading failed" };
        }
    }
}