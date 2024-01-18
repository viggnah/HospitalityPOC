//Setup Asgardeo Auth React SDK for PamodORG
// export const AsgardeoConfig = {
//     signInRedirectURL: "http://localhost:3000",
//     signOutRedirectURL: "http://localhost:3000",
//     clientID:"sfWONkMbVmfqIaKEASDPawhty9Ia",
//     baseUrl: "https://api.asgardeo.io/t/pamodorg",
//     scope: ["openid", "groups", "profile"]
// };

export const AsgardeoConfig = {
    signInRedirectURL: "http://localhost:3000",
    signOutRedirectURL: "http://localhost:3000",
    clientID: "lr63TlEbyYXc9JWrRXBEFm5Bxica",
    baseUrl: "https://api.asgardeo.io/t/pamod",
    scope: ["openid", "groups", "profile", "urn:pamod:loyaltysvcloyaltyapi5c6:delete_loyalty_points",
        "urn:pamod:loyaltysvcloyaltyapi5c6:get_all_points",
        "urn:pamod:loyaltysvcloyaltyapi5c6:get_loyalty_points",
        "urn:pamod:loyaltysvcloyaltyapi5c6:post_loyalty_points"]
};

//Loyalty Service Host and Port for PamodORG
// export const Hosts = {
//    Loyalty: "https://c28959d1-6d47-494e-9314-92f88143b490-dev.e1-eu-north-azure.choreoapis.dev/drrd/loyaltyapi/1.0.0"
// };

export const Hosts = {
    Loyalty: "https://70523a4f-2a9d-4e13-bb3a-92298a62b410-prod.e1-us-east-azure.choreoapis.dev/abhs/loyaltysvc/loyalty-api-5c6/1.0.0"
};

//TODO remove once the service is ready 

export const ReservationList = [
    {
        "first_name": "John1",
        "last_name": "Doe1",
        "email": "johndoe1@example.com",
        "phone": "1234567890",
        "hotel_code": "ABCD1",
        "hotel_name": "Hotel ABCD1",
        "checkin_date": "2019-01-01",
        "checkout_date": "2019-01-02",
        "no_rooms": 1,
        "special_requests": "Late-checkout"
    },
    {
        "first_name": "John2",
        "last_name": "Doe2",
        "email": "johndoe2@example.com",
        "phone": "1234557590",
        "hotel_code": "ABCD2",
        "hotel_name": "Hotel ABCD2",
        "checkin_date": "2019-05-01",
        "checkout_date": "2019-06-02",
        "no_rooms": 1,
        "special_requests": "Early-checkin"
    }
];
