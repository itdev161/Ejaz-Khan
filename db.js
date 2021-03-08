import mongoose from 'mongoose';
import config from 'config';

const db = config.get('mongoURI');

const connectDatabase = async () => {

try{
await mongoose.connect(db, {
    useUnifiedTopology : true
    
    
    
    
    
});
console.log('Connected to MonoDB');

} catch(error) {
console.error(error.message);




process.exit(1);
}
};

export default connectDatabase;


