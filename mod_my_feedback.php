<?php

ini_set('display_errors',1);
ini_set('display_startup_errors',1);
error_reporting(-1);
/**
 * здесь описание и комментарии
 */
defined('_JEXEC') or die;
 

require_once __DIR__ . '/helper.php';
 

$document = JFactory::getDocument();


$document->addScript('modules/mod_my_feedback/script.js');

require JModuleHelper::getLayoutPath('mod_my_feedback', $params->get('layout', 'default'));

