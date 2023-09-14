const notesClient = require('./notesClient');
require('jest-fetch-mock').enableFetchMocks()

describe('notesClient class', () => {
    test('it calls fetch and loads data', (done) => {
        // Instantiate the class
        const client = new notesClient();

        // Mock the response from fetch 
        fetch.mockResponseOnce(JSON.stringify ({
            note: "Walk the dog"
        }));

        //Call the method, giving it a callback function
        client.loadNotes((returnedDataFromApi) => {
            expect(returnedDataFromApi.note).toBe("Walk the dog");

        //Tell jest our test can now end
            done();
        })
    })
});

