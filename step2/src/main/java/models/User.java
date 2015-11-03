package models;
/**
 * Created by Chazz on 03/11/15.
 */
public class User {

    private String lastName;
    private String firstName;
    private final String pseudo;
    private final String password;
    private String role;

    public User(String pseudo,String password){
        this.pseudo = pseudo;
        this.password = password;
    }

    public String getLastName() {
        return lastName;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getPassword() {
        return password;
    }

    public String getPseudo() {
        return pseudo;
    }

    public String getRole() {
        return role;
    }
}
