package com.example.user;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Objects;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class UserData {
    private @Id
    @GeneratedValue Long id;
    private String username;
    private String email;
    private String password;

    public UserData(String username, String email, String password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        UserData userData = (UserData) o;
        return Objects.equals(id, userData.id) &&
                Objects.equals(username, userData.username);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, username);
    }
}

