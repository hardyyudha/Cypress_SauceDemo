Feature: User Login

    Background:
        Given User access url

    @focus
    Scenario: Login as Valid User
        When User input "username" on "email" field
        * User input "password" on "password" field
        * User click "Login" button
        Then User logged in
    Scenario: Login as Invalid User - Wrong Username
    Scenario: Login as Invalid User - Wrong Password