const { syncDb } = require("../../tasks/sync-db");


describe('Pruebas en syncDb', () => {
    
    test('should increment the proccess two times', () => {
        
        syncDb();
        const times = syncDb()

        expect(times ).toBe(2)
    });
});