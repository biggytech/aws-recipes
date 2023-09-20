## List users
`aws iam list-users`

## Create user
`aws iam create-user --user-name NeliHarbuzava`

## Create Login profile
AWS recommends passing params for Login profile via JSON file.
1. `aws iam create-login-profile --generate-cli-skeleton > create-login-profile.json`
2. Download the file
3. Fill UserName / Password / PasswordResetRequired in the file
4. Rename the file to `create-login-profile-filled.json` and upload the file
5. `aws iam create-login-profile --cli-input-json file://create-login-profile-filled.json`

## Attach policy to user
`aws iam attach-user-policy --policy-arn arn:aws:iam::aws:policy/AmazonS3FullAccess --user-name NeliHarbuzava`

## Create access key
``