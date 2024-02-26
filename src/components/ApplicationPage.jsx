import React from 'react';
import ApplicationForm from '../ApplicationForm';

function ApplicationPage({ jobTitle, company, onSubmit }) {
    return (
        <div className="container mx-auto my-10">
            <div className="bg-gray-100 p-8 rounded-md shadow-lg">
                <h2 className="text-3xl font-semibold mb-4">Apply for {jobTitle} at {company}</h2>
                <ApplicationForm jobTitle={jobTitle} company={company} onSubmit={onSubmit} />
            </div>
        </div>
    );
}

export default ApplicationPage;
