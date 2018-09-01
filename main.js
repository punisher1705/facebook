var FacebookAboutUser = /** @class */ (function () {
    function FacebookAboutUser(userName, userMobile, userEmail, gender, coverPhoto, profilePhoto, currentAge, birthday, friendsCount, postCount, photosCount) {
        var _this = this;
        this.getUserName = function () {
            if (_this.isOfValidAge == true) {
                return _this.userName;
            }
            else {
                console.log("Users must be above 18 years!");
            }
        };
        this.getUserEmail = function () {
            if (_this.isOfValidAge == true) {
                return _this.userEmail;
            }
            else {
                console.log("Users must be above 18 years!");
            }
        };
        this.getGender = function () {
            if (_this.isOfValidAge == true) {
                return _this.gender;
            }
            else {
                console.log("Users must be above 18 years!");
            }
        };
        this.getUserCoverPhoto = function () {
            if (_this.isOfValidAge == true) {
                return _this.coverPhoto;
            }
            else {
                console.log("Users must be above 18 years!");
            }
        };
        this.getUserProfilePhoto = function () {
            if (_this.isOfValidAge == true) {
                return _this.profilePhoto;
            }
            else {
                console.log("Users must be above 18 years!");
            }
        };
        this.getBirthDay = function () {
            if (_this.isOfValidAge == true) {
                return _this.birthday;
            }
            else {
                console.log("Users must be above 18 years!");
            }
        };
        this.getCurrentAge = function () {
            return _this.currentAge;
        };
        this.getFriendsCount = function () {
            if (_this.isOfValidAge == true) {
                return _this.friendsCount;
            }
            else {
                console.log("Users must be above 18 years!");
            }
        };
        this.getPostsCount = function () {
            if (_this.isOfValidAge == true) {
                return _this.postCount;
            }
            else {
                console.log("Users must be above 18 years!");
            }
        };
        this.getPhotosCount = function () {
            if (_this.isOfValidAge == true) {
                return _this.photosCount;
            }
            else {
                console.log("Users must be above 18 years!");
            }
        };
        this.userName = userName;
        this.userMobile = userMobile;
        this.userEmail = userEmail;
        this.gender = gender;
        this.coverPhoto = coverPhoto;
        this.profilePhoto = profilePhoto;
        this.birthday = birthday;
        this.currentAge = currentAge;
        if (this.currentAge >= 18) {
            this.isOfValidAge = true;
        }
        else {
            this.isOfValidAge = false;
        }
        this.friendsCount = friendsCount;
        this.postCount = postCount;
        this.photosCount = photosCount;
    }
    return FacebookAboutUser;
}());
var chinu = new FacebookAboutUser("Chinu", 0987654321, "chinu@gmail.com", "male", "cover.jpg", "profile.jpg", 17, "31s August 2001", 200, 300, 100);
var currentAgeOfUser1 = chinu.getCurrentAge();
console.log("Users Current Age is: " + currentAgeOfUser1);
var usersName1 = chinu.getUserName();
console.log("Name: " + usersName1);
console.log("Email: " + chinu.getUserEmail());
console.log("Gender: " + chinu.getGender());
console.log("Birthday: " + chinu.getBirthDay());
console.log("Friends: " + chinu.getFriendsCount());
console.log("Photos: " + chinu.getPhotosCount());
console.log("Posts: " + chinu.getPostsCount());
var rohan = new FacebookAboutUser("Rohan", 0987654321, "rohan@gmail.com", "male", "cover.jpg", "profile.jpg", 24, "31s August 1994", 400, 300, 200);
var currentAgeOfUser = rohan.getCurrentAge();
console.log("Users Current Age is: " + currentAgeOfUser);
var usersName = rohan.getUserName();
console.log("Name: " + usersName);
console.log("Email: " + rohan.getUserEmail());
console.log("Gender: " + rohan.getGender());
console.log("Birthday: " + rohan.getBirthDay());
console.log("Cover Photo: " + rohan.getUserCoverPhoto());
console.log("Profile Photo: " + rohan.getUserProfilePhoto());
console.log("Friends: " + rohan.getFriendsCount());
console.log("Photos: " + rohan.getPhotosCount());
console.log("Posts: " + rohan.getPostsCount());
