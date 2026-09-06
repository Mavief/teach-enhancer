package dev.matteo.teachEnhancer;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface EnhancementsRepository extends MongoRepository<Enhancement, ObjectId> {
    Optional<Enhancement> findEnhancementByImdbId(String imdbId);
}
