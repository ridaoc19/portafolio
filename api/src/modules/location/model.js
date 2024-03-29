const { Schema, Types, model, Model } = require("mongoose");

const locationSchema = new Schema(
  {
    ip_address: { type: String },
    city: { type: String },
    city_geoname_id: { type: Number },
    region: { type: String },
    region_iso_code: { type: String },
    region_geoname_id: { type: Number },
    postal_code: { type: String },
    country: { type: String },
    country_code: { type: String },
    country_geoname_id: { type: Number },
    country_is_eu: String,
    continent: { type: String },
    continent_code: { type: String },
    continent_geoname_id: { type: Number },
    longitude: { type: Number },
    latitude: { type: Number },
    is_vpn: { type: String },
    name: { type: String },
    abbreviation: { type: String },
    gmt_offset: { type: Number },
    current_time: { type: String },
    is_dst: { type: String },
    emoji: { type: String },
    unicode: { type: String },
    png: { type: String },
    svg: { type: String },
    currency_name: { type: String },
    currency_code: { type: String },
    autonomous_system_number: { type: Number },
    autonomous_system_organization: { type: String },
    connection_type: { type: String },
    isp_name: { type: String },
    organization_name: { type: String },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Location = model("Locations", locationSchema);

module.exports = { Location };
