'use strict';

import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import cx from 'classnames';
import { Field } from 'redux-form';
import { withStyles } from '@material-ui/core/styles';

import DropdownField from '../DropdownField';
import ImageField from '../ImageField';
import InputField from '../InputField';
import LoadingIndicator from '../LoadingIndicator';
import PhoneNumberField from '../PhoneNumberField';
import SearchableDropdownField from '../SearchableDropdownField';
import ZipCodeField from '../ZipCodeField';
import metaData from '../../data/metaData.json';
import { validateEmail } from '../../utils/validators';

import styles from './styles';

const homeAreaOptions = metaData.homeAreas.map(homeArea => ({ value: homeArea.id, label: homeArea.label }));
const scaleOptions = metaData.projectScale.map(scale => ({ value: scale.id, label: scale.description }));
const qualityOptions = metaData.qualityStandard.map(quality => ({ value: quality.id, label: quality.label }));

const isRequired = value => (!value ? 'This field is required' : undefined);
const isValidEmail = value => (value && !validateEmail(value) ? 'Invalid email address' : undefined);

class FlyerFormFields extends Component {
  render() {
    const { city, classes, handleSubmit, imageNames, onHomeAreaChange, onZipcodeChange, submitting } = this.props;

    return (
      <form onSubmit={handleSubmit} className={classes.root}>
        <Grid container>
          <Grid item xs={4}>
            <Typography className={classes.label}>Flyer Name:</Typography>
          </Grid>
          <Grid item xs={8}>
            <Field
              name="description"
              type="text"
              component={InputField}
              fullWidth
              validate={[isRequired]}
              className={classes.field}
              errorMessageClass={classes.error}
            />
          </Grid>
        </Grid>
        <Grid container spacing={16}>
          <Grid item xs={6}>
            <div className={cx(classes.field, classes.imageField)}>
              <Typography className={cx(classes.label, classes.imageFieldLabel)}>Logo:</Typography>
              <Field
                name="realtor.logo"
                component={ImageField}
                validate={[isRequired]}
                errorMessageClass={classes.error}
                aspectRatio={3}
                uploadFolder={process.env.CLOUDINARY_REALTOR_PICTURE_FOLDER}
                uploadPreset={process.env.CLOUDINARY_REALTOR_PICTURE_UPLOAD_PRESET}
              />
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className={cx(classes.field, classes.imageField)}>
              <Typography className={cx(classes.label, classes.imageFieldLabel)}>Profile photo:</Typography>
              <Field
                name="realtorPicture"
                component={ImageField}
                validate={[isRequired]}
                errorMessageClass={classes.error}
                uploadFolder={process.env.CLOUDINARY_REALTOR_PICTURE_FOLDER}
                uploadPreset={process.env.CLOUDINARY_REALTOR_PICTURE_UPLOAD_PRESET}
              />
            </div>
          </Grid>
        </Grid>
        <Grid container spacing={16}>
          <Grid item xs={4}>
            <Typography className={classes.label}>Realtor's Name:</Typography>
            <Field
              name="realtorName"
              type="text"
              component={InputField}
              fullWidth
              validate={[isRequired]}
              className={classes.field}
              errorMessageClass={classes.error}
            />
          </Grid>
          <Grid item xs={4}>
            <Typography className={classes.label}>Phone number:</Typography>
            <Field
              name="realtorPhoneNumber"
              type="text"
              component={PhoneNumberField}
              fullWidth
              validate={[isRequired]}
              className={classes.field}
              errorMessageClass={classes.error}
            />
          </Grid>
          <Grid item xs={4}>
            <Typography className={classes.label}>Email:</Typography>
            <Field
              name="realtorEmail"
              type="text"
              component={InputField}
              fullWidth
              validate={[isValidEmail]}
              className={classes.field}
              errorMessageClass={classes.error}
            />
          </Grid>
        </Grid>

        <Divider className={classes.divider} />

        <Grid container spacing={16} justify="space-between">
          <Grid item xs={7}>
            <Typography className={classes.label}>Property address:</Typography>
            <Field
              name="property.address1"
              type="text"
              component={InputField}
              fullWidth
              validate={[isRequired]}
              className={classes.field}
              errorMessageClass={classes.error}
            />
            <Grid container alignItems="center" spacing={16}>
              <Grid item xs={6}>
                <Typography className={classes.label}>Zipcode:</Typography>
                <Field
                  name="property.zipcode"
                  type="text"
                  component={ZipCodeField}
                  fullWidth
                  validate={[isRequired]}
                  className={classes.field}
                  errorMessageClass={classes.error}
                  onChange={onZipcodeChange}
                />
              </Grid>
              <Grid item xs={6}>
                <Typography className={classes.label} color="primary">
                  {city && `${city.label}, ${city.stateNameShort}`}
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={16}>
              <Grid item xs={6}>
                <Typography className={classes.label}>Listing Price:</Typography>
                <Field
                  name="listingPrice"
                  type="text"
                  component={InputField}
                  fullWidth
                  validate={[isRequired]}
                  className={classes.field}
                  errorMessageClass={classes.error}
                />
              </Grid>
              <Grid item xs={6}>
                <Typography className={classes.label}>Home SQFT:</Typography>
                <Field
                  name="property.sqft"
                  type="text"
                  component={InputField}
                  fullWidth
                  validate={[isRequired]}
                  className={classes.field}
                  errorMessageClass={classes.error}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Typography className={classes.label}>Current Space:</Typography>
            <Field
              name="picture"
              component={ImageField}
              validate={[isRequired]}
              errorMessageClass={classes.error}
              aspectRatio={1.5}
              uploadFolder={process.env.CLOUDINARY_CONSUMER_IMAGES_FOLDER}
              uploadPreset={process.env.CLOUDINARY_CONSUMER_IMAGES_UPLOAD_PRESET}
            />
          </Grid>
        </Grid>

        <Divider className={classes.divider} />

        <Grid container spacing={16}>
          <Grid item xs={4}>
            <Typography className={classes.label}>Home Area:</Typography>
            <Field
              name="homeAreaId"
              component={DropdownField}
              options={homeAreaOptions}
              fullWidth
              validate={[isRequired]}
              className={classes.field}
              errorMessageClass={classes.error}
              onBlur={onHomeAreaChange}
            />
          </Grid>
          <Grid item xs={4}>
            <Typography className={classes.label}>Area SQFT:</Typography>
            <Field
              name="areaSqft"
              type="text"
              component={InputField}
              fullWidth
              validate={[isRequired]}
              className={classes.field}
              errorMessageClass={classes.error}
            />
          </Grid>
          <Grid item xs={4}>
            <Typography className={classes.label}>SnapPrice:</Typography>
            <Field
              name="imageKey"
              component={SearchableDropdownField}
              options={imageNames}
              fullWidth
              validate={[isRequired]}
              className={classes.field}
              errorMessageClass={classes.error}
            />
          </Grid>
        </Grid>
        <Grid container spacing={16}>
          <Grid item xs={6}>
            <Typography className={classes.label}>Project Scale:</Typography>
            <Field
              name="projectScaleId"
              component={DropdownField}
              options={scaleOptions}
              fullWidth
              validate={[isRequired]}
              className={classes.field}
              errorMessageClass={classes.error}
            />
          </Grid>
          <Grid item xs={6}>
            <Typography className={classes.label}>Project Quality:</Typography>
            <Field
              name="qualityStandardId"
              component={DropdownField}
              options={qualityOptions}
              fullWidth
              validate={[isRequired]}
              className={classes.field}
              errorMessageClass={classes.error}
            />
          </Grid>
        </Grid>

        <Grid container justify="flex-end" spacing={16}>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit(values =>
                this.props.onSubmit({
                  ...values,
                  preview: true
                })
              )}>
              Preview
            </Button>
          </Grid>
          <Grid item>
            <Button type="submit" variant="contained" color="primary">
              Save
            </Button>
          </Grid>
        </Grid>
        {submitting && <LoadingIndicator />}
      </form>
    );
  }
}

export default withStyles(styles)(FlyerFormFields);
