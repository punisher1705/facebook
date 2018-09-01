class FacebookAboutUser {
    protected userName: string;
    private userMobile: number;
    private userEmail: string;
    protected gender: string;
    protected coverPhoto: string;
    protected profilePhoto: string;
    protected birthday: string;
    protected currentAge: number;
    private isOfValidAge: boolean;
    protected friendsCount: number;   
    protected postCount: number;
    protected photosCount: number;
    
    constructor (userName:string, userMobile: number, userEmail: string, gender:string, coverPhoto:string, profilePhoto:string, currentAge:number, birthday:string, friendsCount:number, postCount:number, photosCount:number) {
        this.userName = userName;
        this.userMobile = userMobile;
        this.userEmail = userEmail;
        this.gender = gender;
        this.coverPhoto = coverPhoto;
        this.profilePhoto = profilePhoto;
        this.birthday = birthday;
        this.currentAge = currentAge;
        if(this.currentAge >= 18){
            this.isOfValidAge = true;
        }else{
            this.isOfValidAge = false;
        }
        this.friendsCount = friendsCount;
        this.postCount = postCount;
        this.photosCount = photosCount;
    }

    getUserName = () => {
        if(this.isOfValidAge == true){
           return this.userName;
        }else{
            console.log("Users must be above 18 years!")
        }
    }
    getUserEmail = () => {
        if(this.isOfValidAge == true){
            return this.userEmail;
         }else{
             console.log("Users must be above 18 years!")
         }
    }
    getGender = () => {
        if(this.isOfValidAge == true){
            return this.gender;
         }else{
             console.log("Users must be above 18 years!")
         } 
    }
    getUserCoverPhoto = () => {
        if(this.isOfValidAge == true){
            return this.coverPhoto;
         }else{
             console.log("Users must be above 18 years!")
         }
    }   
    getUserProfilePhoto = () => {
        if(this.isOfValidAge == true){
            return this.profilePhoto;
         }else{
             console.log("Users must be above 18 years!")
         }
    }
    getBirthDay = () => {
        if(this.isOfValidAge == true){
            return this.birthday;
         }else{
             console.log("Users must be above 18 years!")
         }
    }
    getCurrentAge = () => {
        return this.currentAge;
    }
    getFriendsCount = () => {
        if(this.isOfValidAge == true){
            return this.friendsCount;
         }else{
             console.log("Users must be above 18 years!")
         }
    }
    getPostsCount = () => {
        if(this.isOfValidAge == true){
            return this.postCount;
         }else{
             console.log("Users must be above 18 years!")
         }
    }
    getPhotosCount = () => {
        if(this.isOfValidAge == true){
            return this.photosCount;
         }else{
             console.log("Users must be above 18 years!")
         }
    }
}

let chinu = new FacebookAboutUser("Chinu", 0987654321, "chinu@gmail.com", "male", "cover.jpg", "profile.jpg", 17,"31s August 2001", 200, 300, 100);
let currentAgeOfUser1 = chinu.getCurrentAge();
console.log(`Users Current Age is: ${currentAgeOfUser1}`);
let usersName1 = chinu.getUserName();
console.log(`Name: ${usersName1}`);
console.log(`Email: ${chinu.getUserEmail()}`);
console.log(`Gender: ${chinu.getGender()}`);
console.log(`Birthday: ${chinu.getBirthDay()}`);
console.log(`Friends: ${chinu.getFriendsCount()}`);
console.log(`Photos: ${chinu.getPhotosCount()}`);
console.log(`Posts: ${chinu.getPostsCount()}`);

let rohan = new FacebookAboutUser("Rohan", 0987654321, "rohan@gmail.com", "male", "cover.jpg", "profile.jpg", 24, "31s August 1994", 400, 300, 200);
let currentAgeOfUser = rohan.getCurrentAge();
console.log(`Users Current Age is: ${currentAgeOfUser}`);
let usersName = rohan.getUserName();
console.log(`Name: ${usersName}`);
console.log(`Email: ${rohan.getUserEmail()}`);
console.log(`Gender: ${rohan.getGender()}`);
console.log(`Birthday: ${rohan.getBirthDay()}`);
console.log(`Cover Photo: ${rohan.getUserCoverPhoto()}`);
console.log(`Profile Photo: ${rohan.getUserProfilePhoto()}`);
console.log(`Friends: ${rohan.getFriendsCount()}`);
console.log(`Photos: ${rohan.getPhotosCount()}`);
console.log(`Posts: ${rohan.getPostsCount()}`);
