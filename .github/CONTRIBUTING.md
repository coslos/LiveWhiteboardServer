> Guess you're a contributor now!
>
> **This is the most important file for you to read as a contributor.** If written well, this file will explain *everything* you need to know in order to successfully contribute to the project. If a project *does not* have this file, you should ask for guidelines by opening an issue.

# Contributor's Guide

Thanks for your interest in contributing! Please read carefully through our guidelines below to ensure that your contribution adheres to our project's standards.

## Code of Conduct

To hold a safe space for all contributors, we expect all project participants to adhere to our Code of Conduct. Please read the [full text](/.github/CODE_OF_CONDUCT.md) so that you can understand what actions will and will not be tolerated.

## Issue Tracking

We use [GitHub Issues](/issues) to track all tasks related to this project.

To help you get your feet wet and get you familiar with our contribution process, we have a list of friendly issues (to be added soon) that contain tasks which are fairly easy to fix. This is a great place to get started.

## Getting Started

1.  If you are new to Git and Github, it is advisable you go through[this
    link](https://guides.github.com/)
    before moving to the next step.

2.  Fork the project on Github, [Help Guide to Fork a repository](https://help.github.com/articles/fork-a-repo/).
4.  Create a branch specific to the issue you are working on.

    ```shell
    git checkout -b update-readme-file
    ```

    For clarity to yourself and others on the issue you're working on, name
    your branch something like `update-xxx` or `fix-xxx` where `xxx` is a short
    description of the changes you're making. For example `update-readme` or
    `fix-typo-on-contribution-md`.

5.  Open up the project in your favourite text editor, select the file you want
    to contribute to and make your changes.

    If you are making changes to the README.md file, you would need to have
    Markdown knowledge. Visit [here to read about Github
    Markdown](https://guides.github.com/features/mastering-markdown/) and [here
    to practice](http://www.markdowntutorial.com/)


6.  After making your changes in the new git branch then add your modified
    files to git.

    ```shell
    git add path/to/filename.ext
    ```

    You can also add all unstaged files using:

    ```shell
    git add .
    ```

    Note, using a `git add .` will automatically add all files. You can do a
    `git status` to see your changes, but do it before `git add`.

6.  Commit your changes using a descriptive commit message.

    ```shell
    git commit -m "Brief Description of Commit"
    ```

7.  Push your commits to your Github Fork:

    ```shell
    git push -u origin branch-name
    ```

8.  Submit a pull request.

    Within GitHub, visit this main repository and you should see a banner
    suggesting to make a pull request. While you're writing up the pull
    request, you can add `Closes #XXX` in the message body where `#XXX` is the
    issue you're fixing. So an example would be `Closes #42` would close issue
    `#42`.

## Submitting a Pull Request

What is a pull request?
[Visit link](https://help.github.com/articles/about-pull-requests/)

If you decide to fix an issue, it's advisable to check the comment thread in
case there's somebody already working on a fix. If no one is working on it at
the moment, kindly leave a comment stating that you intend to work on it so
other people don't accidentally duplicate your effort.

In a situation where by somebody decides to fix an issue but doesn't follow up
for a particular period of time, say 2-3 weeks, it's acceptable to still pick
up the issue but make sure to leave a comment.

## Helpful Resources