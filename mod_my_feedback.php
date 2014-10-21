<?php

// ini_set('display_errors',1);
// ini_set('display_startup_errors',1);
// error_reporting(-1);

defined('_JEXEC') or die;
 

require_once __DIR__ . '/helper.php';
 

$document = JFactory::getDocument();
$document->addStyleSheet('modules/mod_my_feedback/bower_components/bootstrapvalidator/dist/css/bootstrapValidator.min.css');
$document->addScript('modules/mod_my_feedback/bower_components/bootstrapvalidator/dist/js/bootstrapValidator.js');
$document->addScript('modules/mod_my_feedback/bower_components/bootstrapvalidator/dist/js/language/ru_RU.js');
$document->addScript('modules/mod_my_feedback/js/script.js');

require JModuleHelper::getLayoutPath('mod_my_feedback', $params->get('layout', 'default'));
