<?php
/**
 * здесь описание и комментарии
 */
defined('_JEXEC') or die;
 

require_once __DIR__ . '/helper.php';
 

$document = JFactory::getDocument();


$document->addScript('modules/mod_my_feedback/script.js');

require JModuleHelper::getLayoutPath('mod_my_feedback', $params->get('layout', 'default'));

