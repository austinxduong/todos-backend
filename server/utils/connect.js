import mongosse from "mongoose"

const connection = {isConnectioed: null};

export const connectoToDB = async () => {
    try {
        if (connection.isConnected) {
            return;
        }
        const db = await mongoose.connection(process.env.MONGO_URI);
    } catch (error) {
        console.log("Couldn't connect with the database:", error);
    }
};