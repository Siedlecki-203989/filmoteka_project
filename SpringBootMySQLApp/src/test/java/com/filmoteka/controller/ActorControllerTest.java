package com.filmoteka.controller;

import com.filmoteka.sdo.Actor;
import io.restassured.http.ContentType;
import org.junit.Test;

import static org.junit.Assert.*;
import static io.restassured.RestAssured. *;
import static io.restassured.matcher.RestAssuredMatchers.*;
import static org.hamcrest.Matchers.*;

public class ActorControllerTest {

    @Test
    public void getActor() {
        get("/api/actors/1").then().statusCode(200).assertThat()
                .body("firstName", equalTo("Jason"))
                .body("lastName", equalTo("Statham"))
                .body("id", equalTo(1));
    }

    @Test
    public void deleteActor() {
    }

    @Test
    public void createActor() {
    }

    @Test
    public void updateActor() {

        Actor actor = new Actor();
        actor.setId((long) 2);
        actor.setFirstName ("Katarzyna");
        actor.setLastName ("Figura");

        given().body (actor)
                .when ()
                .contentType (ContentType.JSON)
                .put ("/api/actors/2");

        get("/api/actors/2").then().statusCode(200).assertThat()
                .body("firstName", equalTo("Katarzyna"))
                .body("lastName", equalTo("Figura"))
                .body("id", equalTo(2));

    }

    @Test
    public void getAllActors() {
    }
}