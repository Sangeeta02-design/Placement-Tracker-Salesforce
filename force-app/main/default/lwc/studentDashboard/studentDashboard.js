import { LightningElement, wire, track } from 'lwc';

import getStudents from '@salesforce/apex/PlacementDashboardController.getStudents';
import getTotalStudents from '@salesforce/apex/PlacementDashboardController.getTotalStudents';
import getTotalCompanies from '@salesforce/apex/PlacementDashboardController.getTotalCompanies';
import getTotalApplications from '@salesforce/apex/PlacementDashboardController.getTotalApplications';
import getTotalPlacements from '@salesforce/apex/PlacementDashboardController.getTotalPlacements';

import { refreshApex } from '@salesforce/apex';

const columns = [

    { label: 'Name', fieldName: 'Name' },

    { label: 'Email', fieldName: 'Email__c' },

    { label: 'Phone', fieldName: 'Phone__c' },

    { label: 'Branch', fieldName: 'Branch__c' },

    { label: 'CGPA', fieldName: 'CGPA__c', type: 'number' },

    { label: 'Status', fieldName: 'Placement_Status__c' }

];

export default class StudentDashboard extends LightningElement {

    columns = columns;

    @track students = [];

    @track filteredStudents = [];

    totalStudents = 0;

    totalCompanies = 0;

    totalApplications = 0;

    totalPlacements = 0;

    selectedBranch = 'All';

    selectedStatus = 'All';

    wiredStudentsResult;

    branchOptions = [

        { label: 'All', value: 'All' },

        { label: 'CSE', value: 'CSE' },

        { label: 'IT', value: 'IT' },

        { label: 'ECE', value: 'ECE' },

        { label: 'ME', value: 'ME' }

    ];

    statusOptions = [

        { label: 'All', value: 'All' },

        { label: 'Placed', value: 'Placed' },

        { label: 'Interview', value: 'Interview' },

        { label: 'Applied', value: 'Applied' },

        { label: 'Rejected', value: 'Rejected' }

    ];

    @wire(getStudents)

    wiredStudents(result){

        this.wiredStudentsResult = result;

        if(result.data){

            this.students = result.data;

            this.filteredStudents = [...result.data];

        }

    }

    @wire(getTotalStudents)

    wiredStudentCount({data}){

        if(data){

            this.totalStudents=data;

        }

    }

    @wire(getTotalCompanies)

    wiredCompanyCount({data}){

        if(data){

            this.totalCompanies=data;

        }

    }

    @wire(getTotalApplications)

    wiredApplicationCount({data}){

        if(data){

            this.totalApplications=data;

        }

    }

    @wire(getTotalPlacements)

    wiredPlacementCount({data}){

        if(data){

            this.totalPlacements=data;

        }

    }

    handleSearch(event){

        const keyword = event.target.value.toLowerCase();

        this.filteredStudents = this.students.filter(student =>

            student.Name.toLowerCase().includes(keyword)

        );

    }

    handleBranch(event){

        this.selectedBranch = event.detail.value;

    }

    handleStatus(event){

        this.selectedStatus = event.detail.value;

    }

    refreshDashboard(){

        refreshApex(this.wiredStudentsResult);

    }

}