package dev.matteo.teachEnhancer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/enhancements")
public class EnhancementsController {
    @Autowired
    private EnhancementsService enhancementsService;

    @GetMapping
    public ResponseEntity<List<Enhancement>> getAllEnhancements() {
        return new ResponseEntity<List<Enhancement>>(enhancementsService.allEnhancements(), HttpStatus.OK);
    }

    @GetMapping("/{imdbId}")
    public ResponseEntity<Optional<Enhancement>> getSingleEnhancement(@PathVariable String imdbId) {
        return new ResponseEntity<Optional<Enhancement>>(enhancementsService.singleEnhancement(imdbId), HttpStatus.OK);
    }
}
