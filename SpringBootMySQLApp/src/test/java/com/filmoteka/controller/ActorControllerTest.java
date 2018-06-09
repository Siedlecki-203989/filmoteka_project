package com.filmoteka.controller;

import org.junit.Test;

import static org.junit.Assert.*;
import static io.restassured.RestAssured. *;
import static io.restassured.matcher.RestAssuredMatchers.*;
import static org.hamcrest.Matchers.*;

public class ActorControllerTest {

    @Test
    public void getActor() {
        get("/api/actors/1").then().statusCode(200).assertThat()
                .body("firstName", equalTo("Jason"));
    }

    @Test
    public void deleteActor() {
    }

    @Test
    public void createActor() {
    }

    @Test
    public void updateActor() {
    }

    @Test
    public void getAllActors() {
    }
}