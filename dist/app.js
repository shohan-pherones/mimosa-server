"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const express_mongo_sanitize_1 = __importDefault(require("express-mongo-sanitize"));
const helmet_1 = __importDefault(require("helmet"));
const hpp_1 = __importDefault(require("hpp"));
const mongoose_1 = __importDefault(require("mongoose"));
const morgan_1 = __importDefault(require("morgan"));
const auth_route_1 = __importDefault(require("./routes/auth.route"));
const beautyPackage_route_1 = __importDefault(require("./routes/beautyPackage.route"));
const booking_route_1 = __importDefault(require("./routes/booking.route"));
const specialist_route_1 = __importDefault(require("./routes/specialist.route"));
const user_route_1 = __importDefault(require("./routes/user.route"));
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.configureMiddlewares();
        this.setupRoutes();
        this.connectToDatabase();
    }
    configureMiddlewares() {
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({
            extended: true,
        }));
        this.app.use((0, cors_1.default)());
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, express_mongo_sanitize_1.default)());
        this.app.use((0, helmet_1.default)());
        this.app.use((0, hpp_1.default)());
    }
    setupRoutes() {
        this.app.get('/', (req, res) => {
            res.status(200).json({ message: 'Welcome to Mimosa server!' });
        });
        // bypassed api
        this.app.use('/api/auth', auth_route_1.default);
        this.app.use('/api/users', user_route_1.default);
        this.app.use('/api/beauty_packages', beautyPackage_route_1.default);
        this.app.use('/api/specialists', specialist_route_1.default);
        this.app.use('/api/bookings', booking_route_1.default);
    }
    connectToDatabase() {
        const URI = process.env.MONGO_URI;
        mongoose_1.default
            .connect(URI)
            .then(() => {
            const PORT = process.env.PORT || 4000;
            this.app.listen(PORT, () => {
                console.log(`Server is running on port: ${PORT}`);
            });
        })
            .catch((error) => {
            console.log(`MongoDB connection error: ${error}`);
        });
    }
}
dotenv_1.default.config();
new App();
