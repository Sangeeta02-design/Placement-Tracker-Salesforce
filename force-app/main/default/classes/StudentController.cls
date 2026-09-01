public with sharing class StudentController {

    @AuraEnabled(cacheable=true)
    public static List<Student__c> getStudents() {

        return [
            SELECT Id,
                   Name,
                   Email__c,
                   Phone__c,
                   Branch__c,
                   CGPA__c,
                   Placement_Status__c
            FROM Student__c
            ORDER BY Name
        ];
    }

}