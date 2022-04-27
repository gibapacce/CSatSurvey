<srcSchema _cs="Web App Survey Log (dell)" created="2020-09-14 04:58:01.340Z" createdBy-id="0"
           entitySchema="xtk:srcSchema" img="xtk:schema.png" label="Web App Survey Log"
           labelSingular="Web App Survey Log" lastModified="2022-02-16 15:46:59.318Z"
           mappingType="sql" md5="C4B7865D8566B47A6F63A46420D29276" modifiedBy-id="0"
           name="webAppSurveyLog" namespace="dell" xtkschema="xtk:srcSchema">
  <createdBy _cs="Sumeet Srivastava (sumeet_srivastava)"/>
  <modifiedBy _cs="Sumeet Srivastava (sumeet_srivastava)"/>
  <element autopk="true" label="Web App Survey Log" name="webAppSurveyLog">
    <attribute default="GetDate()" desc="Creation date" label="Creation date" name="creationDate"
               sql="true" type="datetime"/>
    <element label="Survey Submission Data" name="surveySubmissionData">
      <attribute label="Email Address" length="256" name="emailAddress" type="string"/>
      <attribute label="First Name" length="256" name="firstName" type="string"/>
      <attribute label="Last Name" length="256" name="lastName" type="string"/>
      <attribute label="Web Source ID" length="256" name="websourceID" type="string"/>
      <attribute label="Country Code" length="15" name="countryCode" type="string"/>
      <attribute label="Language Code" length="15" name="languageCode" type="string"/>
      <attribute label="Web App Internal Name" length="128" name="webAppInternalName"
                 type="string"/>
      <element label="Questionnaires" name="questionnaires">
        <attribute label="Company Name" length="240" name="companyName" type="string"/>
        <attribute label="Company Alias" length="128" name="companyAlias" type="string"/>
        <attribute label="Country And City" length="240" name="countryAndCity" type="string"/>
        <attribute label="Number of Employees" length="128" name="numberOfEmployees"
                   type="string"/>
        <attribute label="Name of Primary Sales Person" length="128" name="primarySalesPerson"
                   type="string"/>
        <attribute label="Main Contact Person of the company" length="128" name="mainContactPerson"
                   type="string"/>
        <attribute label="Main Contact Person's Postion of the company" length="128"
                   name="mainContactPosition" type="string"/>
        <attribute label="Email" length="128" name="email" type="string"/>
        <attribute label="Phone" length="20" name="phone" type="string"/>
        <attribute label="Human Reresources E-mail" length="128" name="hrEmail" type="string"/>
        <attribute label="Human Reresources Contact" length="128" name="hrContact"
                   type="string"/>
        <attribute label="Promote the Program Internally" length="128" name="promoteProgram"
                   type="string"/>
        <attribute label="Introductory Call to learn more about the program" length="5"
                   name="introductoryCall" type="string"/>
        <attribute label="Overall satisfied with support" length="240" name="overallsupport"
                   type="string"/>
        <attribute label="Satisfied with resolve Incidents" length="240" name="resolveIncident"
                   type="string"/>
        <attribute label="If incident not resolved,resouce redirected" length="10"
                   name="resourceRedirected" type="string"/>
      </element>
    </element>
  </element>
</srcSchema>