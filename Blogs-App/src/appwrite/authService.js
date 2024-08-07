import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
                .setEndpoint(conf.appwriteUrl)
                .setProject(conf.appwriteProjectId)

        this.account = new Account(this.client);

    }

    async createAccount({email, password, name}) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);

            // if userAccount successfully register ho jaata hai toh usse sidha login krdo
            if(userAccount) {
                return this.login({email, password});
            } else {
                return userAccount;
            }

        } catch (error) {
            console.log("Appwrite Service :: createAccount :: error : ", error)
        }
    }

    async login({email, password}) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            console.log("Appwrite Service :: login :: error : ", error)
        }
    }

    async getCurrentUser() {
        try {
            return this.account.get();
        } catch (error) {
            console.log("Appwrite Service :: getCurrentUser :: error : ", error)
        }
        
        // Just in case agar try block execute hone se pehle hi koi error aa gya toh return null
        return null;
    }
    
    async logout(){
        try {
            // Session(s) bcoz user jis jis browser se login kia hai sabse logout ho jaye
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite Service :: logout :: error : ", error)
        }
    }
}




const authService = new AuthService(); //object of the class

export default authService;