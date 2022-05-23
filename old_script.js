var reqDate = getCurrentDate();
reqDate = formatDate(reqDate, "%4Y/%2M/%2D");
reqDatetime = formatDate(getCurrentDate(), "%4Y/%2M/%2D %02H:%02N:%02S");

var formSubmissiondataQuery = '<webAppSurveyLog xtkschema="dell:webAppSurveyLog" _operation="insert">';
formSubmissiondataQuery += '<formSubmissiondata emailAddress="'+ctx.vars.@emailAddress+'" ';
formSubmissiondataQuery += 'webAppInternalName="UserSATSurvey" ';
formSubmissiondataQuery += 'question1="'+ctx.vars.@question1+'" ';
formSubmissiondataQuery += 'question2="'+ctx.vars.@question2+'" ';
formSubmissiondataQuery += 'question3="'+ctx.vars.@question3+'" ';
formSubmissiondataQuery += 'question4_1="'+ctx.vars.@question4_1+'" ';
formSubmissiondataQuery += 'question4_2="'+ctx.vars.@question4_2+'" ';
formSubmissiondataQuery += 'question4_3="'+ctx.vars.@question4_3+'" ';
formSubmissiondataQuery += 'question4_4="'+ctx.vars.@question4_4+'" ';
formSubmissiondataQuery += 'question4_5="'+ctx.vars.@question4_5+'" ';
formSubmissiondataQuery += 'question4_6="'+ctx.vars.@question4_6+'" ';
formSubmissiondataQuery += 'question5="'+ctx.vars.@question5+'" ';
formSubmissiondataQuery += 'question6="'+ctx.vars.@question6+'" ';
formSubmissiondataQuery += 'question7="'+ctx.vars.@question7+'" ';
formSubmissiondataQuery += 'question8="'+ctx.vars.@question8+'" ';
formSubmissiondataQuery += 'question9="'+ctx.vars.@question9+'" ';
formSubmissiondataQuery += 'question10="'+ctx.vars.@question10+'" ';
formSubmissiondataQuery += 'question11="'+ctx.vars.@question11+'" ';
formSubmissiondataQuery += 'question12="'+ctx.vars.@question12+'" ';
formSubmissiondataQuery += 'question13="'+ctx.vars.@question13+'" ';
formSubmissiondataQuery += 'question14="'+ctx.vars.@question14+'" ';
formSubmissiondataQuery += 'question15="'+ctx.vars.@question15+'" ';
formSubmissiondataQuery += 'question16="'+ctx.vars.@question16+'" ';
formSubmissiondataQuery += 'question17="'+ctx.vars.@question17+'" ';
formSubmissiondataQuery += 'question18="'+ctx.vars.@question18+'" ';
formSubmissiondataQuery += 'websourceID="99999999" ';
formSubmissiondataQuery += 'countryCode="US" /> ';
formSubmissiondataQuery += '</webAppSurveyLog>';

xtk.session.Write(formSubmissiondataQuery);

var formSubmissiondataQuery = '<webAppLogRcp xtkschema="nms:webAppLogRcp" _operation="insert">';
formSubmissiondataQuery += '<formSubmissiondata firstName="'+ctx.vars.@firstName+'" ';
formSubmissiondataQuery += 'lastName="'+ctx.vars.@lastName+'" ';
formSubmissiondataQuery += 'contactNumber="'+ctx.vars.@phone+'" ';
formSubmissiondataQuery += 'company="'+ctx.vars.@companyName+'"  ';
formSubmissiondataQuery += 'emailAddress="'+ctx.vars.@emailAdd+'" ';

if(langCode == 'ES' || langCode == 'es') {
  formSubmissiondataQuery += 'websourceID="75000126" ';
} else {
  formSubmissiondataQuery += 'websourceID="75000125" ';
}

formSubmissiondataQuery += 'sourceUpdateby="FY20_EPP_Survey_MX" ';
formSubmissiondataQuery += 'campaignName="FY20_EPP_Survey_MX" ';
formSubmissiondataQuery += 'sourceCode="ACM" ';
formSubmissiondataQuery += 'requestedBy="kerrie_moran@Dell.com" ';
formSubmissiondataQuery += 'additionaluuditInfo="Nil" ';
formSubmissiondataQuery += 'screenshotName="Nil" ';
formSubmissiondataQuery += 'noticeType="FY20_EPP_Survey_MX" ';
formSubmissiondataQuery += 'preferenceArea="Member" ';
formSubmissiondataQuery += 'countryCode="MX" ';
formSubmissiondataQuery += 'spokenlanguageCode="'+ctx.vars.@langCode+'" ';
formSubmissiondataQuery += 'profilelanguageCode="'+ctx.vars.@langCode+'" ';
formSubmissiondataQuery += 'emailoptFlag="'+ctx.vars.@optionalCB+'" ';
formSubmissiondataQuery += 'preferenceareaemOptFlag="'+ctx.vars.@optionalCB+'" ';;
formSubmissiondataQuery += 'interestFlag="'+ctx.vars.@optionalCB+'" ';
formSubmissiondataQuery += 'interestimpliedDefined="Defined" ';
formSubmissiondataQuery += 'webAppInternalName="latamSurveyForm" ';
formSubmissiondataQuery += 'interest="EPP" ';

formSubmissiondataQuery += 'requestedDate="'+reqDate+'" ';
formSubmissiondataQuery += 'profileupdateDate="'+reqDate+'" ';
formSubmissiondataQuery += 'emailoptDateTime="'+reqDatetime+'" ';
formSubmissiondataQuery += 'interestDate="'+reqDate+'" />';


xtk.session.Write(formSubmissiondataQuery);