import ballerina/http;
import ballerina/io;
import ballerina/sql;
import ballerinax/mysql;
import ballerinax/mysql.driver as _;

type Walkin record {|
    string id?;
    string first_name;
    string last_name;
    string email;
    string phone;
    string hotel_code;
    string hotel_name;
    string checkin_date;
    string checkout_date;
    int no_rooms;
    string special_requests;
|};

configurable string host = "localhost";
configurable string username = "root";
configurable string password = "root";
configurable string database = "reservations";
configurable int port = 3306;

service /db on new http:Listener(8081) {
    private final mysql:Client db;

    function init() returns error? {
        // Initiate the mysql client at the start of the service. This will be used
        // throughout the lifetime of the service.
        self.db = check new (host, username, password, database, port);
    }

    resource function post reservations(Walkin[] walkinRecords) returns http:Created|error {
        // Create a batch parameterized query.
        sql:ParameterizedQuery[] insertQueries = from Walkin walkinRecord in walkinRecords
            select `INSERT INTO walkins (first_name, last_name, email, phone, hotel_code, hotel_name, checkin_date, checkout_date, no_rooms, special_requests) 
                VALUES (${walkinRecord.first_name}, ${walkinRecord.last_name}, ${walkinRecord.email}, ${walkinRecord.phone}, ${walkinRecord.hotel_code}, ${walkinRecord.hotel_name}, ${walkinRecord.checkin_date}, ${walkinRecord.checkout_date}, ${walkinRecord.no_rooms}, ${walkinRecord.special_requests})`;

        // Insert records in a batch.
        sql:ExecutionResult[] result = check self.db->batchExecute(insertQueries);
        // put result's lastInsertId into an array and send it back to the client
        int[] lastInsertIds = [];
        foreach var res in result {
            lastInsertIds.push(<int>res.lastInsertId);
        }
        io:println(result);
        return <http:Created>{
            body: lastInsertIds
        };
    }

   resource function get reservation/[int reservationid] ()returns Walkin[]|error {
        //TODO ad data range to retrive
        Walkin[] walkins = [];
        stream<Walkin, error?> resultStream = self.db->query(
        `SELECT * FROM walkins where id=${reservationid}`
    );
        check from Walkin employee in resultStream
            do {
                walkins.push(employee);
            };
        check resultStream.close();
        return walkins;
    }

}
