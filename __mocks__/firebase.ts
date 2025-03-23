const mockDb = {
    collection: jest.fn().mockReturnThis(),
    doc: jest.fn().mockReturnThis(),
    get: jest.fn().mockResolvedValue({ exists: true, data: () => ({}) }),
    set: jest.fn().mockResolvedValue(null),
    update: jest.fn().mockResolvedValue(null),
    delete: jest.fn().mockResolvedValue(null),
};

export default {
    firestore: jest.fn(() => mockDb),
    credential: {
        cert: jest.fn(),
    },
    initializeApp: jest.fn(),
};
