var app = angular.module('myApp', ['ngRoute', 'ngCookies']);

app.config(function($routeProvider)
{
	$routeProvider	

	.when('/home', {
		templateUrl: 'home/welcome.html',
		controller: 'HomeController'
	})
	.when('/userrole', {
		templateUrl: 'userrole/frmUserRole.html',
		controller: 'UserRoleController'
	})
	.when('/userprofile', {
		templateUrl: 'user/frmUserProfile.html',
		controller: 'UserProfileController'
	})
	.when('/login', {
		templateUrl: 'user/frmLogin.html',
		controller: 'UserProfileController'
	})
	.when('/listusersadmin', {
		templateUrl: 'user/frmUserListAdmin.html',
		controller: 'UserProfileController'
	})
	.when('/listallusers', {
		templateUrl: 'friend/frmAllUsers.html',
		controller: 'FriendController'
	})
	.when('/listpending', {
		templateUrl: 'friend/frmPendingRequest.html',
		controller: 'FriendController'
	})
	.when('/listmyfriends', {
		templateUrl: 'friend/frmViewFriends.html',
		controller: 'FriendController'
	})
	.when('/usertype', {
		templateUrl: 'usertype/frmUserType.html',
		controller: 'UserTypeController'
	})
	.when('/viewjobs', {
		templateUrl: 'job/frmListJob.html',
		controller: 'JobController'
	})
	.when('/addjob', {
		templateUrl: 'job/frmJob.html',
		controller: 'JobController'
	})
	.when('/viewappliedjobs',
	{
		templateUrl: 'job/frmViewMyJobApply.html',
		controller: 'JobController'
	})
	.when('/approveblogs', {
		templateUrl: 'blog/frmUserBlogAdmin.html',
		controller: 'BlogController'
	})
	.when('/viewblogs', {
		templateUrl: 'blog/frmListBlog.html',
		controller: 'BlogController'
	})
	.when('/addblog', {
		templateUrl: 'blog/frmBlog.html',
		controller: 'BlogController'
	})
	.when('/myblog', {
		templateUrl: 'blog/frmMyBlog.html',
		controller: 'BlogController'
	})
	.when('/approveforums', {
		templateUrl: 'forum/frmUserForumAdmin.html',
		controller: 'ForumController'
	})
	.when('/viewforums', {
		templateUrl: 'forum/frmListForum.html',
		controller: 'ForumController'
	})
	.when('/addforum', {
		templateUrl: 'forum/frmForum.html',
		controller: 'ForumController'
	})
	.when('/myforum', {
		templateUrl: 'forum/frmMyForum.html',
		controller: 'ForumController'
	})
	.when('/addforumcmts', {
		templateUrl: 'forum/frmAddComment.html',
		controller: 'ForumController'
	})
	.when('/viewevents', {
		templateUrl: 'event/frmEventList.html',
		controller: 'EventController'
	})
	.when('/addevent', {
		templateUrl: 'event/frmEvent.html',
		controller: 'EventController'
	})
	.when('/viewbulletin', {
		templateUrl: 'bulletin/frmListBulletin.html',
		controller: 'BulletinController'
	})
	.when('/addbulletin', {
		templateUrl: 'bulletin/frmBulletin.html',
		controller: 'BulletinController'
	})
	.when('/listallusers', {
		templateUrl: 'friend/frmAllUsers.html',
		controller: 'FriendController'
	})
	.when('/enterchat', {
		templateUrl: 'chat/frmchat.html',
		controller: 'ChatController'
	})
	.when('/chat', {
		templateUrl: 'chat/frmchat.html',
		controller: 'ChatController'
	})
	.otherwise({redirectTo: '/'});
});

app.run( function($rootScope,$location,$cookieStore,$http){
    
    $rootScope.$on('$locationChangeStart',function(event,next,current){
        console.log("$locationChangeStart")
        var restrictedPage=$.inArray($location.path(),['/login', '/userrole', '/userprofile', '/addjob','/addblog'])== -1;
        console.log("restrictedpage ;"+restrictedPage)
        var loggedIn=$rootScope.currentUser;
        console.log("loggedin:"+loggedIn)
        if(restrictedPage & !loggedIn){
            console.log("navigation to login page")
            $location.path('/home');
        }
        
    });
    
    $rootScope.currentUser=$cookieStore.get('currentUser')||{};
    if($rootScope.currentUser){
        $http.defaults.headers.common['Authorization']= 'Basic' + $rootScope.currentUser;
    }
    
});