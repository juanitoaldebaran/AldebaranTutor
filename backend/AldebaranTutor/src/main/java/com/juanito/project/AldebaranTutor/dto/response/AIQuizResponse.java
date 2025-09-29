package com.juanito.project.AldebaranTutor.dto.response;

import com.juanito.project.AldebaranTutor.model.Level;
import com.juanito.project.AldebaranTutor.model.Sector;

public class AIQuizResponse {
    private Sector sector;
    private Level level;
    private String quizJsonResponse;

    public AIQuizResponse(Sector sector, Level level, String quizJsonResponse) {
        this.sector = sector;
        this.level = level;
        this.quizJsonResponse = quizJsonResponse;
    }

    public AIQuizResponse() {
    }

    public Sector getSector() {
        return sector;
    }

    public void setSector(Sector sector) {
        this.sector = sector;
    }

    public Level getLevel() {
        return level;
    }

    public void setLevel(Level level) {
        this.level = level;
    }

    public String getQuizJsonResponse() {
        return quizJsonResponse;
    }

    public void setQuizJsonResponse(String quizJsonResponse) {
        this.quizJsonResponse = quizJsonResponse;
    }
}
