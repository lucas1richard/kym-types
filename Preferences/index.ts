import * as Sequelize from 'sequelize';

export interface PreferencesAttributes {
  preferences: any
}

interface PreferencesInstanceMethods {
}

export interface PreferencesPrototype {
  prototype: PreferencesInstanceMethods
}

export interface PreferencesInstance extends Sequelize.Instance<PreferencesAttributes>, PreferencesInstanceMethods, PreferencesAttributes {
}

export interface PreferencesClassMethods {
}

export interface PreferencesModel extends Sequelize.Model<PreferencesInstance, PreferencesAttributes>, PreferencesClassMethods {
}
