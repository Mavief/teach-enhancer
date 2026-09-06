package dev.matteo.teachEnhancer;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EnhancementsService {
    @Autowired
    private EnhancementsRepository enhancementsRepository;

    public List<Enhancement> allEnhancements() {
        return enhancementsRepository.findAll();
    }

    public Optional<Enhancement> singleEnhancement(String id) {
        return enhancementsRepository.findEnhancementByImdbId(id);
    }
}
