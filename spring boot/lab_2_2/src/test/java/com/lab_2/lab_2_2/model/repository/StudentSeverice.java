package com.lab_2.lab_2_2.model.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StudentSeverice {
    @Autowired
    studentRepository sRepo;
public Student createStudent(String name,String sid, char sex){
    Student newStudent= new Student();
    newStudent.setStudent_name(name);
    newStudent.setStudent_id(sid);
    newStudent.setStudent_name(sex);

    sRepo.save(newStudent);

    return null;

}
 public Student getStudent(long id){

    Student ourstudent=sRepo.find(id).orElse(null);

    return ourstudent;
 }

   
 public student upadatestudent(long id, student changes){
     student existingStudent =this.getstudent(id);

     if (existingStudent)
 }
    
}
