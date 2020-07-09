# Related List component based on LWC framework
Lightning component for displaying a list of Salesforce records that are related to a parent record with a lookup or master-detail relationship.

[Install the package](https://login.salesforce.com/packaging/installPackage.apexp?p0=04t6F000003zIJvQAM)

**Notes:**
- When click "New" button you need to fill in parent record in the pop up.
- You can also check out [Related List based on Lightning framework](https://github.com/artyom-bazyk/singleRelatedList)

The component configuration fields are:
- **record-id** - Id of parent record (Required)
- **sobject-api-name** - Name of child sobject (Required)
- **related-field-api-name** - Name of lookup or master-detail field on child sobject (Required)
- **sorted-by** - Name of field used for sorting (Required)
- **sorted-direction** -  ASC or DESC for ascending/descending directions of sorting (Optional)
- **fields** - List of API Names for displaying (Required)
- **columns** - Array of the columns object that's used to define the data types (Required). For data types [read datatable specification](https://developer.salesforce.com/docs/component-library/bundle/lightning-datatable/documentation) 
- **custom-actions** - List of actions in action menu (Optional). Edit and Delete are default.
- **row-action-handler** - The action triggered when a row action is clicked. It overrides standard handler (Optional)
- **number-of-records** - number of records in a list. Default is 6 (Optional)

![](relatedList.gif)
