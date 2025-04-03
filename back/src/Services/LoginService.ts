import User from "../Models/user.ts";
import jwt from "jsonwebtoken";

class LoginService {
    static registerUser = async (email: string, password: string) => {
        const passwordCrypt = CryptoJS.AES.encrypt(
            password,
            process.env.SECRET as string
        ).toString();

        const newUser = new User({
            email,
            password: passwordCrypt,
        });

        try {
            await newUser.save();
            return true
        } catch (error) {
            return false
        }
    };
    static login = async (email: string, password: string) => {
        const user = await User.findOne({ email });

        if (!user)
            return "Not user Founded"

        var bytes = CryptoJS.AES.decrypt(
            user.password,
            process.env.SECRET as string
        );
        const passwordDecrypted = bytes.toString(CryptoJS.enc.Utf8);
        if (password !== passwordDecrypted)
            return "Invalid Password"

        const secret = process.env.SECRET;
        if (secret) {
            const token = jwt.sign(
                {
                    id: user._id,
                },
                secret,
                {
                    expiresIn: "2days",
                }
            );
            return token
        }
    };
}
        






export default LoginService;
