# In Progress

# Codeforces Visualizer

You only need to know the codeforces user-handle to explore his/her codeforce account
Here you can view user details, rating changes, submissions, blogs and more.

## Available Scripts

In the project directory, you can run:

### `npm i`

Install all the libraries

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## How to Contribute

### Your contribution will be appreciated

Take a look at the Existing [Issues] or create your own!
Fork the Repo and create a Branch for any Issue that you are working upon.
Create a Pull Request which will be promptly reviewed and suggestions would be added to improve it.
Add Screenshots to help us know what this is all about.

## How to make a Pull Request

1. Fork the repository by clicking on the Fork symbol at the top right corner.

2. Clone the forked repository.

   git clone https://git@github.com:21omkarsase/Codeforces-Visualizer.git

3. Navigate to the project directory.

   cd .\Codeforces-Visualizer\

4. Make changes in source code.

5. Stage your changes and commit

   git add .
   git commit -m "<your_commit_message>"

6. Push your local commits to the remote repo.

   git push origin YourBranchName

7. Create a PR

Note If anyone contributes to this repository, then the changes will not be reflected in your local repository. For that:

9. Setup a reference(remote) to the original repository to get all the changes from the remote.

   git remote add upstream https://git@github.com:21omkarsase/Codeforces-Visualizer.git

10. Check the remotes for this repository.

git remote -v

11. Fetching from the remote repository will bring in its branches and their respective commits.

git fetch upstream

12. Make sure that you're on your main branch.

git checkout main

13. Now that we have fetched the upstream repository, we want to merge its changes into our local branch. This will bring that branch into sync with the upstream, without losing our local changes.

git merge upstream/main
