<srcSchema _cs="Web App ACM Survey Log (dell)" created="2022-04-11 20:21:40.237Z"
           createdBy-id="0" desc="Extended Schema for ACM SUrvey" entitySchema="xtk:srcSchema"
           extendedSchema="dell:webAppSurveyLog" img="xtk:schema.png" label="Web App ACM Survey Log"
           labelSingular="Web App ACM Survey Log" lastModified="2022-04-11 20:23:47.486Z"
           mappingType="sql" md5="D0DA5164AD4BF43C4FFD051D3E6DB729" modifiedBy-id="0"
           name="webAppACMSurveyLog" namespace="dell" xtkschema="xtk:srcSchema">
  <createdBy _cs="Gilberto Filho (gilberto_filho)"/>
  <modifiedBy _cs="Gilberto Filho (gilberto_filho)"/>
  <element desc="Extended Schema for ACM SUrvey" label="Web App ACM Survey Log" labelSingular="Web App ACM Survey Log" name="webAppACMSurveyLog">
        <attribute default="GetDate()" desc="Creation date" label="Creation date" name="creationDate" sql="true" type="datetime"/>

  <element label="Survey Submission Data" name="surveySubmissionData">
        <attribute label="Email Address" length="256" name="emailAddress" type="string"/>
        <attribute label="Web Source ID" length="256" name="websourceID" type="string"/>
        <attribute label="Country Code" length="15" name="countryCode" type="string"/>
        <attribute label="Language Code" length="15" name="languageCode" type="string"/>
        <attribute label="Web App Internal Name" length="128" name="webAppInternalName" type="string"/>

    <element label="Questionnaires" name="questionnaires">
        <attribute label="Question 1" length="55" name="question1" type="string"/>
        <attribute label="Question 2" length="55" name="question2" type="string"/>
        <attribute label="Question 3" length="55" name="question3" type="string"/>
        <attribute label="Question 4_1" length="55" name="question4_1" type="string"/>
        <attribute label="Question 4_2" length="55" name="question4_2" type="string"/>
        <attribute label="Question 4_3" length="55" name="question4_3" type="string"/>
        <attribute label="Question 4_4" length="55" name="question4_4" type="string"/>
        <attribute label="Question 4_5" length="55" name="question4_5" type="string"/>
        <attribute label="Question 4_6" length="55" name="question4_6" type="string"/>
        <attribute label="Question 5" length="500" name="question5" type="string"/>
        <attribute label="Question 6" length="55" name="question6" type="string"/>
        <attribute label="Question 7" length="55" name="question7" type="string"/>
        <attribute label="Question 8" length="55" name="question8" type="string"/>
        <attribute label="Question 9" length="500" name="question9" type="string"/>
        <attribute label="Question 10" length="55" name="question10" type="string"/>
        <attribute label="Question 11" length="55" name="question11" type="string"/>
        <attribute label="Question 12" length="55" name="question12" type="string"/>
        <attribute label="Question 13" length="500" name="question13" type="string"/>
        <attribute label="Question 14" length="55" name="question14" type="string"/>
        <attribute label="Question 15" length="55" name="question15" type="string"/>
        <attribute label="Question 16" length="500" name="question16" type="string"/>
        <attribute label="Question 17" length="500" name="question17" type="string"/>
        <attribute label="Question 18" length="500" name="question18" type="string"/>
      </element>
    </element>
  </element>
</srcSchema>