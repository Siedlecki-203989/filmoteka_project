package com.filmoteka.controller;

import com.filmoteka.sdo.Actor;
import com.filmoteka.sdo.Award;
import com.filmoteka.service.ActorService;
import com.filmoteka.service.AwardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityNotFoundException;
import java.util.List;

@RestController
@RequestMapping("/api")

public class AwardController {

}
