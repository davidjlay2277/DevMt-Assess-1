/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE
let gitDefinition = "A powerful tool for version control. Use git for version recovery and collaboration."
console.log("git:\n" + gitDefinition +"\n");

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE
let  gitHubDefinition  = "A popular remote repository. GitHub is web based, storing your projects in the cloud and allowing for easy sharing, collaboration, archiving and recovery." 
console.log("GitHub:\n" +  gitHubDefinition  + "\n");

//////////////////PROBLEM 3////////////////////
/*
    Create a variable called 'gitInitDefinition'.  
    It should be a string containing your best definition of what 'git init' does.
*/

//CODE HERE
let gitInitDefinition = "Establish a local repository (or repo) at the current directory. "
console.log("git init:\n" +  gitInitDefinition + "\n");

//////////////////PROBLEM 4////////////////////
/*
    Create a variable called 'gitCloneDefinition'.  
    It should be a string containing your best definition of what 'git clone' does.
*/

//CODE HERE
gitCloneDefinition = "Allows you to copy an existing repo to another directory/location."
console.log("git clone:\n" + gitCloneDefinition +"\n");
//////////////////PROBLEM 5////////////////////
/*
    Create a variable called 'gitStatusDefinition'.  
    It should be a string containing your best definition of what 'git status' does.
*/

//CODE HERE
gitStatusDefinition = "Provides helpful info on the repo in your current directory. For example, Git Status can identify if a repo exists, if items have been added, and if any items are ready to commit."
console.log("git status:\n" + gitStatusDefinition +"\n");
//////////////////PROBLEM 6////////////////////
/*
    Create a variable called 'gitAddDefinition'.  
    It should be a string containing your best definition of what 'git add' does.

    Create another variable called 'gitAddCode'.  
    It should be a string containing the code to add all files.
*/

//CODE HERE
gitAddDefinition = "This command is used to add items/files to an 'initialized' repo in the current directory. Adding files means you can now control versions of those files. \nIMPORTANT: Without adding files, there will be nothing to commit."
console.log("git ddd:\n" + gitAddDefinition);

gitAddCode = "'git add .'"
console.log("TIP: use " + gitAddCode +" to add all files in the current directory.\n");
//////////////////PROBLEM 7////////////////////
/*
    Create a variable called 'gitCommitDefinition'.  
    It should be a string containing your best definition of what 'git commit' does.

    Create a variable called 'gitCommitCode'.  
    It should be a string containing the code to commit using the message "initial commit".
*/

//CODE HERE
gitCommitDefinition = "Acts like saving your files. This will save any changes you made since your last commit"
console.log("git commit:\n" + gitCommitDefinition);

gitCommitCode = " 'git commit' "
gitCommitMessageCode = "' -m [your message]' "
console.log("TIP: when using " + gitCommitCode + "be sure to follow up with" + gitCommitMessageCode + "in oder to add a message (or comment) to the changes you are commiting. This will help you keep track of verions.");
//////////////////PROBLEM 8////////////////////
/*
    Create a variable called 'gitPushDefinition'.  
    It should be a string containing your best definition of what 'git push' does.
*/

//CODE HERE
gitPushDefinition = "Move your recent commits from your local repor to a remote repo. This is hte command that will. Use 'git push' followed by a the desired GitHub URL and 'master'(for pushign the master branch)"
console.log("git push:\n" + gitPushDefinition +"\n");
console.log("TIP: You will need to use 'git remote add origin [URL]', and then authenticate, in order to esablish a connection to your remote repo.")
console.log("\nAuthor: David Lay\nDate: 05/21/23")