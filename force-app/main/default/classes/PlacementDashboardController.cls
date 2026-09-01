public with sharing class PlacementDashboardController {

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

    @AuraEnabled(cacheable=true)
    public static Integer getTotalStudents() {
        return [SELECT COUNT() FROM Student__c];
    }

    @AuraEnabled(cacheable=true)
    public static Integer getTotalCompanies() {
        return [SELECT COUNT() FROM Company__c];
    }

    @AuraEnabled(cacheable=true)
    public static Integer getTotalApplications() {
        return [SELECT COUNT() FROM Application__c];
    }

    @AuraEnabled(cacheable=true)
    public static Integer getTotalPlacements() {
        return [SELECT COUNT() FROM Placement__c];
    }
}